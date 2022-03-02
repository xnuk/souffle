// vim: ft=sass

*
	margin: 0
	padding: 0
	box-sizing: border-box

html, body
	height: 100%

body
	font-family: 'Noto Sans CJK KR', 'Noto Sans', sans-serif

	&.layout-mode::after
		content: '클릭 시 크기 조정 모드가 해제됩니다'
		text-align: center
		line-height: 100vh
		background-color: rgba(255, 255, 255, 0.5)
		border: 5px solid red
		position: absolute
		inset: 0
		display: block

ul
	list-style: none

a
	text-decoration: none
	color: inherit

button
	border: none
	font-family: inherit
	color: inherit
	background: transparent
	cursor: pointer
