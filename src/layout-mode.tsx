import { useCallback } from 'preact/hooks'
import { useConfig } from './config'

import { container, text } from './layout-mode.module.css'

export const LayoutMode = () => {
	const [layoutMode, setLayoutMode] = useConfig('layoutMode')
	const onClick = useCallback(() => {
		setLayoutMode(false)
	}, [setLayoutMode])

	return layoutMode ? (
		<div onClick={onClick} class={container}>
			<span class={text}>클릭 시 크기 조정 모드가 해제됩니다.</span>
		</div>
	) : null
}
