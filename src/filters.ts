import { useState } from 'preact/hooks'

import { useLogFilter, Line, User } from './message'
import { isWorker } from './jobs'

const stripSuffix = (source: string, suffix: string): string | null =>
	source.endsWith(suffix) ? source.slice(0, -suffix.length) : null

const getSystemMessage = (line: Line): string | null =>
	(line[0] === '00' && line[2] === '0039' && line[3] === '' && line[4]) ||
	null

const itemQuery = (line: Line): string | null => {
	const systemMessage = getSystemMessage(line)
	if (systemMessage == null) return null

	let message =
		stripSuffix(systemMessage, ' 보유 상황을 확인합니다.') ||
		stripSuffix(systemMessage, '의 이름을 클립보드에 복사했습니다.')

	return message?.match(/^\uE0BB([^\uE000-\uE3FF\n]+)\uE03C?$/)?.[1] || null
}

const existsQuery = (
	line: Line,
): { place: string; tab: number; count: number } | null => {
	const systemMessage = getSystemMessage(line)
	if (systemMessage == null) return null

	const test = systemMessage.match(
		/^(초코보 가방|.{0,20}의 소지품|소지품)(?: ([0-9]+)번 탭)?에 ([,0-9]+)개 있습니다.$/,
	)

	if (test == null) return null

	return {
		place: test[1]!.replace(/의 소지품$/, ''),
		tab: Number((test[2] || '1').replace(/[^0-9]+/g, '')),
		count: Number(test[3]!.replace(/[^0-9]+/g, '')),
	}
}

export const useItemQueryFilter = () => useLogFilter(itemQuery)
export const useExistsItemQueryFilter = () => useLogFilter(existsQuery)

const eq = (a: string, b: string) => a.toLowerCase() === b.toLowerCase()

const jobNumber = (line: Line, user: User | null): number | null => {
	if (
		user != null &&
		line[0] === '03' &&
		eq(line[2], user.id) &&
		line[3] === user.name
	)
		return parseInt(line[4] || '0', 16)
	return null
}

export const useJobNumber = <T>(def: T): number | T => {
	const [num, setNum] = useState<number | T>(def)
	const job = useLogFilter(jobNumber)

	if (job != null && num !== job) {
		setNum(job)
		return job
	}

	return num
}

export const useWorkerState = (def: boolean = true) => {
	const num = useJobNumber(null)
	const [flop, setFlop] = useState(def)
	const worker = num == null ? null : isWorker(num)

	if (worker != null && flop !== worker) {
		setFlop(worker)
		return worker
	}

	return flop
}

const me = (line: Line, user: User | null): string | null => {
	const rawLine = line.join(' | ')
	return user && rawLine.includes(user.name) ? rawLine : null
}

export const useMeFilter = () => useLogFilter(me)

const fishEndCodes = new Set([
	0x454, 0x455, 0x457, 0x458, 0x459, 0x45c, 0x45d, 0x45e, 0x45f, 0x460, 0x465,
	0x466, 0x467, 0x469, 0xdb7, 0xdb8, 0xdbb, 0xdc5, 0xdc7, 0xdd5, 0xdd5, 0xde7,
	0x1583, 0x1583, 0x158e,
])

const fishCode = (code: number) => {
	if (code === 0x456 || code === 0x461) return 'start'

	if (fishEndCodes.has(code)) return 'end'
	return null
}

const fish = (line: Line, user: User | null): 'start' | 'end' | null => {
	if (user == null) return null
	if (line[0] === '41' && line[2] === '150001') {
		const code = parseInt(line[3] || '0', 16)
		return code > 0 ? fishCode(code) : null
	}
	return null
}

export const useFishFilter = () => useLogFilter(fish)
