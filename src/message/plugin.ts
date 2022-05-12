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

interface InCombatChangedEvent {
	type: 'onInCombatChangedEvent'
	detail: {
		inACTCombat: boolean
		inGameCombat: boolean
	}
}

interface PlayerChangedEvent {
	type: 'onPlayerChangedEvent'
	detail: {
		pos: { x: number; y: number; z: number }
		rotation: number
	}
}

type DataEvent =
	| LogLine
	| ChangePrimaryPlayer
	| ChangeZone
	| InCombatChangedEvent
	| PlayerChangedEvent

interface CallParams {
	subscribe: { events: DataEvent['type'][] }
	unsubscribe: { events: DataEvent['type'][] }
	getCombatants: {
		ids?: number[]
		names?: string[]
	}
}

const getApi = (() => {
	let api: OverlayPluginApi | null = null

	return async (): Promise<OverlayPluginApi> => {
		if (api != null) return api
		while (!(window as any).OverlayPluginApi?.ready) await delay(300)
		return (api = (window as any).OverlayPluginApi)
	}
})()

const apiCall = async <K extends keyof CallParams>(
	call: K,
	data: K extends {
		[key in keyof CallParams]: {} extends CallParams[key] ? key : never
	}[keyof CallParams]
		? null
		: CallParams[K],
): Promise<unknown> => {
	const api = await getApi()

	return new Promise(ok =>
		api.callHandler(
			JSON.stringify(
				Object.assign(Object.create(null), { call }, data || {}),
			),
			ok,
		),
	)
}

const getPlugin = async <T extends unknown>(
	events: DataEvent['type'][],
	cb: (x: T) => void,
) => {
	;(window as any).__OverlayCallback = (data: T | null) => {
		if (data == null) return
		cb(data)
	}

	apiCall('subscribe', { events })
	return () => apiCall('unsubscribe', { events })
}

export const listen = ({
	onLine,
	onUser,
	onZone,
	onInCombatChange,
}: Listener): (() => void) => {
	const unsubscribe = getPlugin<DataEvent>(
		[
			'LogLine',
			'ChangePrimaryPlayer',
			'ChangeZone',
			'onInCombatChangedEvent',
			'onPlayerChangedEvent',
		],
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

			if (
				data.type === 'onInCombatChangedEvent' &&
				onInCombatChange != null
			) {
				const d = data.detail
				return onInCombatChange(d.inACTCombat && d.inGameCombat)
			}

			if (data.type === 'onPlayerChangedEvent') {
				return
				// console.log(data)
			}
		},
	)

	if (process.env.NODE_ENV === 'development') {
		;(window as any)['apiCall'] = apiCall
	}

	return () => {
		unsubscribe.then(
			func => func(),
			() => {},
		)
	}
}

export const onCombat = async () => {
	const whatisit = await apiCall('getCombatants', null)
	console.log(whatisit)
}
