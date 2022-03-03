import { createTheme } from '@vanilla-extract/css'

export const [dark, theme] = createTheme({
	background: 'rgba(0, 0, 0, .7)',
	text: 'rgba(255, 255, 255, .9)',
	hover: 'rgba(255, 255, 255, .3)',
	disabledOpacity: '0.4',
})
