import { style } from '@vanilla-extract/css'
import { theme } from './theme.css'

export const section = style({
	display: 'flex',
	flexFlow: 'column',
})

const gap = '10px'

export const checkboxItem = style({
	display: 'flex',
	flexFlow: 'row',
	alignItems: 'center',

	padding: gap,

	':hover': {
		backgroundColor: theme.hover,
	},

	selectors: {
		'&:not(:hover)': {
			transition: 'background-color .2s',
		},
	},
})

export const checkboxInput = style({
	transformOrigin: 'center center',
	transform: 'scale(1.5)',
})

export const checkboxText = style({
	display: 'block',
	paddingLeft: gap,
	lineHeight: 1,
})

export const subtext = style({
	opacity: '.7',
	fontSize: '.7em',
})

export const settingInner = style({
	background: theme.background,
})

export const setting = style({
	display: 'block',
})
