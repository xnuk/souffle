import { createContext, FunctionComponent as FC } from 'preact'
import { useState, useEffect, useContext } from 'preact/hooks'

import { delay } from './utils'
import { decode } from './querystring'
import { listen } from './overlay-websocket'

interface OverlayPluginApi {
	callHandler(json: string, cb: (data: unknown) => void): void,
}

interface LogLine {
	type: 'LogLine'
	line: [
		type: string,
		timestamp: string,
		subtype: string,
		...message: string[],
		guid: string,
	]
	rawLine: string
}

interface ChangePrimaryPlayer {
	type: 'ChangePrimaryPlayer'
	charID: number
	charName: string
}

type DataEvent = LogLine | ChangePrimaryPlayer

export type Line = LogLine['line']

export interface User { id: string, name: string }

interface WsMsg<T, M> {
	msg: M
	msgtype: T
	to?: string
	type: 'broadcast'
}

type Chat = WsMsg<'Chat', string>
type ChangeZone = WsMsg<'ChangeZone', { zoneID: number }>
type SendCharName = WsMsg<'SendCharName', { charID: number, charName: string }>

const getWebSocket = <T extends unknown>(cb: (x: T) => void) => {
	const qs = decode(window.location.search.replace(/^\?/, ''))
	const host = qs['HOST_PORT'] || ''

	if (!/^wss?:\/\//.test(host)) return

	return listen(`${host.replace(/\/+$/g, '')}/BeforeLogLineRead`, cb)
}

const getOP = async <T extends unknown>(events: string[], cb: (x: T) => void) => {
	const api = await getOverlayPluginApi(window)

	;(window as any).__OverlayCallback = (data: T | null) => {
		if (data == null) return
		cb(data)
	}

	api.callHandler(
		JSON.stringify({call: 'subscribe', events }),
		() => {},
	)

	return () => api.callHandler(
		JSON.stringify({call: 'unsubscribe', events }),
		() => {},
	)
}

const getOverlayPluginApi = async (window: any): Promise<OverlayPluginApi> => {
	while (!window.OverlayPluginApi?.ready) await delay(300)
	return window.OverlayPluginApi
}

const MessageContext = createContext(null as Line | null)
const UserNameContext = createContext(null as User | null)

export const MessageProvider: FC = ({ children }) => {
	const [line, setLine] = useState(null as Line | null)
	const [user, setUser] = useState(null as User | null)

	useEffect(() => {
		const ws = getWebSocket<
			Chat | ChangeZone | SendCharName
		>(data => {
			if (data.msgtype === 'SendCharName') {
				const { charID, charName } = data.msg
				return setUser({
					id: charID.toString(16).toUpperCase(),
					name: charName,
				})
			}

			if (data.msgtype === 'Chat') {
				return setLine(data.msg.split('|') as Line)
			}
		})
		if (ws) return ws

		let unsubscribe = () => {}

		getOP<DataEvent>([ 'LogLine', 'ChangePrimaryPlayer' ], data => {
			if (data.type === 'LogLine') {
				return setLine(data.line)
			}

			if (data.type === 'ChangePrimaryPlayer') {
				return setUser({
					id: data.charID.toString(16).toLowerCase(),
					name: data.charName,
				})
			}
		}).then(func => {
			unsubscribe = func
		})

		return () => unsubscribe()
	}, [])

	return (
		<UserNameContext.Provider value={user}>
			<MessageContext.Provider value={line}>
				{children}
			</MessageContext.Provider>
		</UserNameContext.Provider>
	)
}

export const useLogFilter = <T extends unknown>(
	func: (line: Line, user: User | null) => T
): T | null => {
	const user = useContext(UserNameContext)
	const line = useContext(MessageContext)

	if (line == null) return null
	return func(line, user)
}
