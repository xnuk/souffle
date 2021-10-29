import { delay, decodeQuerystring } from '../utils'
import type { Listener, Line } from './'

const closeOnError = (socket: WebSocket) =>
	(socket.onerror = () => socket.close())

const onClose = (socket: WebSocket) =>
	new Promise<void>(ok => {
		closeOnError(socket)
		socket.onclose = async () => {
			await delay(1000)
			ok()
		}
	})

const open = <T>(url: string, callback: (x: T) => void) => {
	let socket: WebSocket
	let explicitClose = false

	const handleClose = () => {
		if (explicitClose) return

		socket = new WebSocket(url)
		socket.onmessage = ({ data }) => {
			if (data === '.') socket.send('.')

			let res: T
			try {
				res = JSON.parse(data)
			} catch (_) {
				return
			}

			callback(res)
		}

		onClose(socket).then(handleClose)
	}

	handleClose()

	return () => {
		explicitClose = true
		socket.close()
	}
}

const getWebSocket = <T>(cb: (x: T) => void) => {
	const qs = decodeQuerystring(window.location.search.replace(/^\?/, ''))
	const host = qs['HOST_PORT'] || ''

	if (!/^wss?:\/\//.test(host)) return

	return open(`${host.replace(/\/+$/g, '')}/BeforeLogLineRead`, cb)
}

interface WsMsg<T, M> {
	msg: M
	msgtype: T
	to?: string
	type: 'broadcast'
}

type Chat = WsMsg<'Chat', string>
type ChangeZone = WsMsg<'ChangeZone', { zoneID: number }>
type SendCharName = WsMsg<
	'SendCharName',
	{
		charID: number
		charName: string
	}
>

export const listen = ({
	onLine,
	onUser,
	onZone,
}: Listener): (() => void) | undefined =>
	getWebSocket<Chat | ChangeZone | SendCharName>(data => {
		if (data.msgtype === 'SendCharName' && onUser != null) {
			const { charID, charName } = data.msg
			return onUser({
				id: charID.toString(16).toUpperCase(),
				name: charName,
			})
		}

		if (data.msgtype === 'Chat' && onLine != null) {
			return onLine(data.msg.split('|') as Line)
		}

		if (data.msgtype === 'ChangeZone' && onZone != null) {
			return onZone(data.msg.zoneID)
		}
	})
