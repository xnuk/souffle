import { style } from '@vanilla-extract/css'

import {
	poppableButton,
	showPoppable,
	hidePoppable,
	slowTransition,
} from './toggle-btn.module.css'

export const fishTimer = style({ position: 'relative' })

export const timer = style([
	poppableButton,
	slowTransition,
	{
		fontVariantNumeric: 'tabular-nums',
	},
])

export const show = showPoppable
export const hide = hidePoppable
