export const delay = (ms: number = 300): Promise<void> =>
	new Promise(ok => setTimeout(ok, ms))

export const decodeQuerystring = (str: string) => {
	return Object.fromEntries(
		str
			.replace(/\+/g, '%20')
			.split('&')
			.map(entry => {
				const eq = entry.indexOf('=')
				if (eq < 0) return [decodeURIComponent(entry), ''] as const
				return [
					decodeURIComponent(entry.slice(0, eq)),
					decodeURIComponent(entry.slice(eq + 1)),
				] as const
			}),
	)
}
