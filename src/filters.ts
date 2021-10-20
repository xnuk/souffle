import { useState } from 'preact/hooks'

import { useLogFilter, Line, User } from './message'
import { isWorker } from './jobs'

const stripSuffix = (source: string, suffix: string): string | null =>
	source.endsWith(suffix) ? source.slice(0, -suffix.length) : null

const itemQuery = (line: Line): string | null => {
	const systemMessage =
		(line[0] === '00' && line[2] === '0039' && line[3] === '' && line[4]) ||
		null
	if (systemMessage == null) return null

	let message =
		stripSuffix(systemMessage, ' 보유 상황을 확인합니다.') ||
		stripSuffix(systemMessage, '의 이름을 클립보드에 복사했습니다.')

	return message?.match(/^\uE0BB([-\w\s\d':가-힣]+)\uE03C?$/)?.[1] || null
}

export const useItemQueryFilter = () => useLogFilter(itemQuery)

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

const fishStarts = [
	'에서 낚시를 시작합니다',
	'조심스럽게 물에 넣고 생미끼 낚시를 시도합니다',
] as const

const fishEnds = [
	'낚싯대를 낚아챘습니다',
	'어느새 미끼만 먹고 도망간 것 같습니다',
	'물고기가 도망갔습니다',
	'낚싯줄이 끊어졌습니다',
	'아무것도 낚이지 않았습니다',
	'이곳에는 물고기가 없는 것 같습니다',
	'물고기는 있는 것 같지만',
	'놓쳐버렸습니다',
	'물고기도 놓치고',
	'낚시를 마쳤습니다',
	'낚시가 중단되었습니다',
] as const

const fishMatch = (line: string) => {
	if (fishStarts.some(str => line.includes(str))) return 'start'
	if (fishEnds.some(str => line.includes(str))) return 'end'
	return null
}

const fish = (line: Line, user: User | null): 'start' | 'end' | null => {
	if (user == null) return null
	if (line[0] === '00' && line[2] === '08c3') {
		const message = line[4]
		if (message == null) return null

		const state = fishMatch(message)
		if (state == null) return null

		return state
	}
	return null
}

export const useFishFilter = () => useLogFilter(fish)
