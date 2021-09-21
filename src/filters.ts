import { useState, useEffect } from 'preact/hooks'

import { useLogFilter, Line, User } from './overlay-plugin'
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

const me = (line: Line, user: User | null): string | null =>
	user && line.includes(user.id) ? line.join(' | ') : null

export const useMeFilter = () => useLogFilter(me)
