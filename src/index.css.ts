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

globalStyle('body.layout-mode::after', {
	content: '클릭 시 크기 조정 모드가 해제됩니다',
	textAlign: 'center',
	backgroundColor: 'rgba(255, 255, 255, 0.5)',
	border: '5px solid red',
	position: 'absolute',
	inset: 0,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
})

globalStyle('button', {
	cursor: 'pointer',
})
