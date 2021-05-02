// vim: ft=sass

.link-tarto
	display: block
	width: 100%
	padding: 5px

.item
	display: block
	position: relative
	transition: border-color .2s

	background: $background

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
