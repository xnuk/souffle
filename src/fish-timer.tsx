import { useFishFilter, useJobNumber } from './filters'
import { fisher } from './jobs'
import { useEffect, useState } from 'preact/hooks'
import type { FC } from './utils/preact'

import * as styles from './fish-timer.module.css'

const useIsFisher = () => useJobNumber(fisher) === fisher

const Timer = ({
	start,
	end,
	class: className,
}: {
	start?: number | null
	end?: number | null
	class?: string
}) => {
	const [ms, setMs] = useState(0)

	useEffect(() => {
		if (start == null) return

		if (end == null) {
			const timeout = setInterval(() => {
				const ms = Date.now() - start
				setMs(ms)

				// No fishing takes longer than 60s
				if (ms > 60000) clearInterval(timeout)
			}, 200)

			setMs(0)

			return () => clearInterval(timeout)
		}

		setMs(end - start)
		return
	}, [start, end])

	return <div class={className}>{(ms / 1000).toFixed(1)}s</div>
}

const useFish = () => {
	const state = useFishFilter()
	const [cached, setCached] = useState('end' as 'start' | 'end')
	if (state != null) setCached(state)
	return cached
}

export const FishTimer: FC<{}> = ({}) => {
	const isFisher = useIsFisher()
	const state = useFish()
	const [startTime, setStartTime] = useState(null as number | null)
	const [endTime, setEndTime] = useState(null as number | null)
	const [show, setShow] = useState(false)

	const [firstLoad, setFirstLoad] = useState(false)

	useEffect(() => {
		// DO NOT TRUST TIMESTAMP VALUE FROM LOG
		if (state === 'start') {
			setStartTime(Date.now())
			setEndTime(null)
			setShow(true)
			return
		}

		if (state === 'end') {
			setEndTime(Date.now())
			const timeout = setTimeout(() => setShow(false), 2500)
			return () => clearTimeout(timeout)
		}

		return
	}, [state])

	useEffect(() => {
		setFirstLoad(true)
	}, [])

	return isFisher && firstLoad ? (
		<Timer
			class={`${styles.timer} ${show ? styles.show : styles.hide}`}
			start={startTime}
			end={endTime}
		/>
	) : null
}
