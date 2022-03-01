export const reloadListener =
	import.meta.hot &&
	(async (delay = 1500) => {
		const first =
			(await fetch('/_ping')).headers.get('last-modified') ||
			new Date().toUTCString()

		const interval = setInterval(async () => {
			if (
				(
					await fetch('/_ping', {
						headers: { 'if-modified-since': first },
					})
				).status < 300
			) {
				window.location.reload()
			}
		}, delay)

		return () => clearInterval(interval)
	})
