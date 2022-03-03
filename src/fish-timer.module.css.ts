import { style } from '@vanilla-extract/css'
import { theme } from './theme.css'

export const fishTimer = style({ position: 'relative' })

export const timer = style({
	fontVariantNumeric: 'tabular-nums',
	position: 'absolute',
	backgroundColor: theme.background,

	inset: 0,

	transition: 'transform .5s, opacity .5s',
})

export const show = style({ transform: 'translateY(0)', opacity: 1 })
export const hide = style({
	transform: 'translateY(-100%)',
	opacity: 0,
})
