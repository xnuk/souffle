// vim: ft=sass

.section
	display: flex
	flex-flow: column

.checkbox-item
	$gap: 10px

	display: flex
	flex-flow: row
	align-items: center

	padding: $gap

	&:hover
		background-color: $hover

	&:not(:hover)
		transition: background-color .2s

	& input[type=checkbox]
		transform-origin: center center
		transform: scale(1.5)

.checkbox-text
	display: block
	padding-left: $gap
	line-height: 1

.setting-inner
	background: $background

.toggle-btn
	list-style: none

	&::-webkit-details-marker
		display: none

.toggle-btn
	$size: 50px

	display: block
	width: $size
	height: $size

	margin: 0
	background: $background
	cursor: pointer
	user-select: none
	transition: opacity .2s

	overflow: hidden
	position: relative

	&:before
		content: 'X'
		position: absolute
		left: 0
		top: 0
		transform: translateY(100%)

.toggle-text, .toggle-btn:before
	display: flex
	width: $size
	height: $size
	align-items: center
	justify-content: center

	text-align: center
	transition: transform .2s

svg.toggle-text
	padding: calc($size * 0.2)
	fill: white

.setting
	display: block

	&[open]
		& > .toggle-btn
			& .toggle-text
				transform: translateY(-100%)
			&:before
				transform: translateY(0)

	&:not([open])
		& > .toggle-btn
			&:not(:hover):not(.toggle-btn-hovered)
				opacity: $disabled-opacity

// .setting:not([open]) .toggle-btn
	// border-radius: 10px
