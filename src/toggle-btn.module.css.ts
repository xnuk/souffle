import { style } from '@vanilla-extract/css'
import { theme } from './theme.css'
import { px, square } from './utils/css'

const size = 50
const sized = style(square(px(size)))

export const fastTransition = style({ transitionDuration: '.2s' })
export const slowTransition = style({ transitionDuration: '.5s' })

const flexCentering = style({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
})

const buttonBlured = style([
	fastTransition,
	{
		transitionProperty: 'opacity',
		opacity: theme.disabledOpacity,

		selectors: {
			'details > summary:hover &, details[open] > summary &': {
				opacity: 1,
			},
		},
	},
	'buttonBlured',
])

export const buttonBase = style(
	[
		sized,
		flexCentering,
		{
			textAlign: 'center',
			background: theme.background,
			userSelect: 'none',
		},
	],
	'buttonBase',
)

export const buttonInlineBase = style(
	[buttonBase, buttonBlured],
	'buttonInlineBase',
)

export const buttonJobIcon = style([
	buttonInlineBase,
	{
		fill: 'white',
		padding: px(size * 0.2),
	},
])

export const buttonJobFallback = buttonInlineBase

export const closeButton = style([buttonInlineBase], 'closeButton')

export const poppableButton = style(
	[
		buttonBase,
		{
			transitionProperty: 'opacity transform',
			position: 'absolute',
			top: 0,
			left: 0,
		},
	],
	'poppableButton',
)

export const showPoppable = style({ transform: 'translateY(0)', opacity: 1 })
export const hidePoppable = style({
	transform: 'translateY(-100%)',
	opacity: 0,
})

// button window
export const buttonWindow = style([
	sized,
	{
		overflow: 'hidden',
	},
])

// button content scroll
export const buttonContent = style([
	fastTransition,
	{
		width: px(size),
		position: 'relative',
		cursor: 'pointer',
		transitionProperty: 'transform',
		selectors: {
			'details[open] > summary &': {
				transform: `translateY(${px(-size)})`,
			},
		},
	},
])
