import { style } from '@vanilla-extract/css'
import { theme } from './theme.css'
import { px, square } from './utils/css'

const size = 50
const sized = style(square(px(size)))

const flexCentering = style({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
})

const buttonBase = style(
	[
		sized,
		flexCentering,
		{
			textAlign: 'center',
			transition: 'transform .2s',
		},
	],
	'buttonBase',
)

export const closeButton = style(
	[
		buttonBase,
		{
			position: 'absolute',
			left: 0,
			top: px(size),
			// transform: 'translateY(100%)',
		},
	],
	'closeButton',
)

// export const toggleBtnHovered = style({}, 'toggleBtnHovered')

export const button = style([
	{
		width: px(size),
		height: px(200),
		overflow: 'hidden',
	},
])

export const buttonInner = style({
	width: px(size),
	background: theme.background,
	position: 'relative',
	transition: 'opacity .2s, transform .2s',

	':hover': {
		transform: 'translateY(-100%)',
	},
})

/*
export const toggleBtn = style([
	sized,
	{
		display: 'block',

		margin: 0,
		background: theme.background,
		cursor: 'pointer',
		userSelect: 'none',
		transition: 'opacity .2s',

		overflow: 'hidden',
		position: 'relative',

		':hover': {
			opacity: 1,
		},

		listStyle: 'none',
		selectors: {
			'&::marker': {
				display: 'none',
			},
			[`${setting}[open] > &:before`]: {
				transform: 'translateY(0)',
			},
			[`${setting}:not([open]) > &:not(:hover):not(${toggleBtnHovered})`]:
				{
					opacity: theme.disabledOpacity,
				},
		},
	},
])

export const toggleText = style({
	// ...toggleTextTemplate,

	selectors: {
		'svg&': {
			padding: px(size * 0.2),
			fill: 'white',
		},
		[`${setting}[open] > ${toggleBtn} &`]: {
			transform: 'translateY(-100%)',
		},
	},
})*/
