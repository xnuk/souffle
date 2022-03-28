import { style } from '@vanilla-extract/css'
import { theme } from './theme.css'

export const linkTarto = style({
	display: 'block',
	width: '100%',
	padding: '5px',
})

export const item = style({
	display: 'block',
	position: 'relative',
	transition: 'border-color .2s',

	background: theme.background,

	borderLeft: '.5em solid transparent',

	':hover': {
		borderColor: theme.hover,
	},

	selectors: {
		'&:not(:hover)': {
			transition: 'border-color .2s',
		},
	},
})

export const deleteItemBtn = style({
	display: 'block',
	position: 'absolute',
	right: 0,
	top: 0,
	bottom: 0,
	padding: '5px 1em',

	':hover': {
		background: theme.hover,
	},

	selectors: {
		[`${item}:not(:hover) &`]: {
			opacity: 0,
		},
	},
})
