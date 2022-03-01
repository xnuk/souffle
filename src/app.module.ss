// vim: ft=sass

.app
	// background: $background
	background: transparent
	color: $text
	word-break: keep-all

	transition: opacity .5s
	opacity: 1

	&.hide
		opacity: 0
		pointer-events: none

	// background-attachment: fixed
	// background-image: linear-gradient(
	// 	135deg,
	// 	transparent 98%,
	// 	$background 98%,
	// 	$background
	// )

.dark
	--background: rgba(0, 0, 0, .7)
	--text: rgba(255, 255, 255, .9)
	--hover: rgba(255, 255, 255, .3)
	--disabled-opacity: 0.4
