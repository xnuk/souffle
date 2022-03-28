import { createGlobalThemeContract } from '@vanilla-extract/css'

export const theme = createGlobalThemeContract({
	background: 'background',
	text: 'text',
	hover: 'hover',
	disabledOpacity: 'disabledOpacity',
})
