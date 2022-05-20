const load = () =>
	fetch('./items.txt')
		.then(v => v.text())
		.then(text => text.split('\n'))

export const find = (() => {
	let cached: null | readonly string[] = null

	return (name: string): number => {
		if (cached == null) {
			cached = []
			load()
				.then(v => {
					cached = v
				})
				.catch(() => {})
		}

		return cached.indexOf(name)
	}
})()
