// vim: ft=sass
.fish-timer
	position: relative

.timer
	font-variant-numeric: tabular-nums
	position: absolute
	background-color: $background

	left: 0
	top: 0
	right: 0
	bottom: 0

	transition: transform .2s, opacity .2s
	transform: translateY(-100%)
	opacity: 0

	&.show
		transform: translateY(0)
		opacity: 1
