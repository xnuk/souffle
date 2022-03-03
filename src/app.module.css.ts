import { style } from '@vanilla-extract/css'
import { theme } from './theme.css'

export const app = style({
	background: 'transparent',
	color: theme.text,
	wordBreak: 'keep-all',

	transition: 'opacity .5s',
})

export const show = style({ opacity: 1 })
export const hide = style({
	opacity: 0,
	pointerEvents: 'none',
})
