import { delay } from './utils'

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

export const listen = <T>(url: string, callback: (x: T) => void) => {
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
