export const px = <T extends number>(n: T) => `${n}px` as const

export const square = <T extends number>(unit: `${T}px`) =>
	({
		width: unit,
		height: unit,
	} as const)
