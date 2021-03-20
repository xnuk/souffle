export const delay = (ms: number = 300): Promise<void> =>
	new Promise(ok => setTimeout(ok, ms))
