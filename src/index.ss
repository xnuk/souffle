// vim: ft=sass

body.dark
	--background: rgba(0, 0, 0, .7)
	--text: rgba(255, 255, 255, .9)
	--hover: rgba(255, 255, 255, .3)

$background: var(--background)
$text: var(--text)
$hover: var(--hover)

*
	margin: 0
	padding: 0
	box-sizing: border-box

html, body
	height: 100%

body
	font-family: 'Noto Sans CJK KR', 'Noto Sans', sans-serif
	background-attachment: fixed
	// background-image: linear-gradient(
	// 	135deg,
	// 	transparent 98%,
	// 	$.background 98%,
	// 	$.background
	// )

main
	background: $background
	color: $text
	word-break: keep-all

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

.link-tarto
	display: block
	width: 100%
	padding: 5px

.item
	display: block
	position: relative
	transition: border-color .2s

	border-left: .5em solid transparent

	&:hover
		border-color: $hover

	&:not(:hover)
		transition: border-color .2s

		& .delete-item-btn
			opacity: 0

.delete-item-btn
	display: block
	position: absolute
	right: 0
	top: 0
	bottom: 0
	padding: 5px 1em

	&:hover
		background: $hover

.setting
	display: flex
	flex-flow: column

	& > label
		display: block

	& .checkbox-item
		$gap: 10px

		display: flex
		flex-flow: row
		align-items: center

		padding: $gap

		& > span
			display: block
			padding-left: $gap
			line-height: 1

		&:hover
			background-color: $hover

		&:not(:hover)
			transition: background-color .2s

		& input[type=checkbox]
			transform-origin: center center
			transform: scale(1.5)
