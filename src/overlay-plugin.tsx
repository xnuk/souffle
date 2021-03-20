import { createContext, FunctionComponent as FC } from 'preact'
import { useState, useEffect, useContext } from 'preact/hooks'

interface OverlayPluginApi {
	callHandler(json: string, cb: (data: unknown) => void): void,
}

interface LogLine {
	type: 'LogLine',
	line: [
		type: string,
		timestamp: string,
		subtype: string,
		...message: string[],
		guid: string,
	],
	rawLine: string
}

interface ChangePrimaryPlayer {
	type: 'ChangePrimaryPlayer',
	charID: number,
	charName: string,
}

type DataEvent = LogLine | ChangePrimaryPlayer

export type Line = LogLine['line']

export interface User { id: string, name: string }

const delay = (ms: number = 300): Promise<void> => new Promise(ok => setTimeout(ok, ms))

const getOverlayPluginApi = async (window: any): Promise<OverlayPluginApi> => {
	while (!window.OverlayPluginApi?.ready) await delay(300)
	return window.OverlayPluginApi
}

/*const getWS = async (window: Window) => {
	const ws = window.location.search
}*/

const MessageContext = createContext(null as Line | null)
const UserNameContext = createContext(null as User | null)

export const MessageProvider: FC = ({ children }) => {
	const [line, setLine] = useState(null as Line | null)
	const [user, setUser] = useState(null as User | null)

	useEffect(() => {
		(async () => {
			const api = await getOverlayPluginApi(window)

			;(window as any).__OverlayCallback = (data: DataEvent) => {
				if (data == null) return

				if (data.type === 'LogLine') {
					setLine(data.line)
				} else if (data.type === 'ChangePrimaryPlayer') {
					setUser({
						id: data.charID.toString(16),
						name: data.charName,
					})
				}
			}

			api.callHandler(
				JSON.stringify({call: 'subscribe', events: [
					'LogLine',
					'ChangePrimaryPlayer',
				]}),
				() => {},
			)
		})()
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
