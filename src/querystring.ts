export const decode = (str: string) => {
	return Object.fromEntries(
		str.replace(/\+/g, '%20').split('&').map(entry => {
			const eq = entry.indexOf('=')
			if (eq < 0) return [decodeURIComponent(entry), ''] as const
			return [
				decodeURIComponent(entry.slice(0, eq)),
				decodeURIComponent(entry.slice(eq + 1))
			] as const
		})
	)
}
