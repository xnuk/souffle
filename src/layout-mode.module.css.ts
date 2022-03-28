import { style } from '@vanilla-extract/css'

export const container = style({
	backgroundColor: 'rgba(255, 255, 255, 0.5)',
	border: '5px solid red',
	position: 'absolute',
	inset: 0,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
})

export const text = style({
	textAlign: 'center',
})
