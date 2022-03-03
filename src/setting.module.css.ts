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

const px = <T extends number>(n: T): `${T}px` => `${n}px`
const toggleBtnSize = 50

export const setting = style({
	display: 'block',
})

const toggleTextTemplate = {
	display: 'flex',
	width: px(toggleBtnSize),
	height: px(toggleBtnSize),
	alignItems: 'center',
	justifyContent: 'center',

	textAlign: 'center',
	transition: 'transform .2s',
} as const

export const toggleBtnHovered = style({})

export const toggleBtn = style({
	display: 'block',
	width: px(toggleBtnSize),
	height: px(toggleBtnSize),

	margin: 0,
	background: theme.background,
	cursor: 'pointer',
	userSelect: 'none',
	transition: 'opacity .2s',

	overflow: 'hidden',
	position: 'relative',

	':before': {
		...toggleTextTemplate,
		content: 'X',
		position: 'absolute',
		left: 0,
		top: 0,
		transform: 'translateY(100%)',
	},

	listStyle: 'none',
	selectors: {
		'&::-webkit-details-marker': {
			display: 'none',
		},
		[`${setting}[open] > &:before`]: {
			transform: 'translateY(0)',
		},
		[`${setting}:not([open]) > &:not(:hover):not(${toggleBtnHovered})`]: {
			opacity: theme.disabledOpacity,
		},
	},
})

export const toggleText = style({
	...toggleTextTemplate,

	selectors: {
		'svg&': {
			padding: px(toggleBtnSize * 0.2),
			fill: 'white',
		},
		[`${setting}[open] > ${toggleBtn} &`]: {
			transform: 'translateY(-100%)',
		},
	},
})
