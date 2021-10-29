// vim: ft=sass
.fish-timer
	position: relative

.timer.timer
	font-variant-numeric: tabular-nums
	position: absolute
	background-color: $background

	left: 0
	top: 0
	right: 0
	bottom: 0

	transition: transform .5s, opacity .5s
	transform: translateY(-100%)
	opacity: 0

	&.show
		transform: translateY(0)
		opacity: 1
