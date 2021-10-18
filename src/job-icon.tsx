import type { FunctionComponent as FC } from 'preact'

import { useJobNumber } from './filters'
import { iconViewbox, icons } from './jobs'

export const JobIcon: FC<{ class?: string }> = props => {
	const num = useJobNumber(0)
	const path = icons[num]
	if (path == null) return <>{props.children}</>

	return (
		<svg class={props.class} viewBox={iconViewbox}>
			<path d={path} />
		</svg>
	)
}
