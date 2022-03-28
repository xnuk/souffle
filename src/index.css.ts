import { globalStyle } from '@vanilla-extract/css'

const reset = () => {
	globalStyle('*', {
		margin: 0,
		padding: 0,
		boxSizing: 'border-box',
	})

	globalStyle('ul, ol, summary', {
		listStyle: 'none',
	})

	globalStyle('summary::marker', {
		display: 'none',
	})

	globalStyle('a', {
		textDecoration: 'none',
		color: 'inherit',
	})

	globalStyle('button', {
		border: 'none',
		fontFamily: 'inherit',
		color: 'inherit',
		background: 'transparent',
	})
}

reset()

globalStyle('html, body', {
	height: '100%',
})

globalStyle('body', {
	fontFamily: "'Noto Sans CJK KR', 'Noto Sans', sans-serif",
})

globalStyle('button', {
	cursor: 'pointer',
})
