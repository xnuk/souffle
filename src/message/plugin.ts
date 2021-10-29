import { delay } from '../utils'
import type { Listener, Line } from './'

interface OverlayPluginApi {
	callHandler(json: string, cb: (data: unknown) => void): void
}

interface LogLine {
	type: 'LogLine'
	line: Line
	rawLine: string
}

interface ChangePrimaryPlayer {
	type: 'ChangePrimaryPlayer'
	charID: number
	charName: string
}

interface ChangeZone {
	type: 'ChangeZone'
	zoneID: number
}

type DataEvent = LogLine | ChangePrimaryPlayer | ChangeZone

const getApi = async (window: any): Promise<OverlayPluginApi> => {
	while (!window.OverlayPluginApi?.ready) await delay(300)
	return window.OverlayPluginApi
}

const getPlugin = async <T extends unknown>(
	events: string[],
	cb: (x: T) => void,
) => {
	const api = await getApi(window)

	;(window as any).__OverlayCallback = (data: T | null) => {
		if (data == null) return
		cb(data)
	}

	api.callHandler(JSON.stringify({ call: 'subscribe', events }), () => {})

	return () =>
		api.callHandler(
			JSON.stringify({ call: 'unsubscribe', events }),
			() => {},
		)
}

export const listen = ({ onLine, onUser, onZone }: Listener): (() => void) => {
	const unsubscribe = getPlugin<DataEvent>(
		['LogLine', 'ChangePrimaryPlayer', 'ChangeZone'],
		data => {
			if (data.type === 'LogLine' && onLine != null) {
				return onLine(data.line)
			}

			if (data.type === 'ChangePrimaryPlayer' && onUser != null) {
				return onUser({
					id: data.charID.toString(16).toLowerCase(),
					name: data.charName,
				})
			}

			if (data.type === 'ChangeZone' && onZone != null) {
				return onZone(data.zoneID)
			}
		},
	)

	return () => {
		unsubscribe.then(
			func => func(),
			() => {},
		)
	}
}
