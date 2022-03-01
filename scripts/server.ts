import { createServer } from 'node:http'

import { readFile } from 'node:fs/promises'
import { networkInterfaces } from 'node:os'

const mimes = {
	css: 'text/css; charset=utf-8',
	js: 'application/javascript; charset=utf-8',
	json: 'application/json; charset=utf-8',
	svg: 'image/svg+xml; charset=utf-8',
	png: 'image/png',
	jpg: 'image/jpeg',
	jpeg: 'image/jpeg',
	gif: 'image/gif',
	html: 'text/html; charset=utf-8',
	bin: 'application/octet-stream',
} as const

const normalizePath = (path: string): `/${string}` | null => {
	try {
		const { pathname } = new URL(path, 'http://localhost')
		return pathname[0] === '/' ? (pathname as `/${string}`) : null
	} catch {
		return null
	}
}

const server = createServer(async (req, res) => {
	const { method, url: origUrl } = req
	const path = origUrl == null ? null : normalizePath(origUrl)
	if (!(method?.toUpperCase() === 'GET' && path != null)) {
		res.writeHead(400, { 'content-length': 0 }).end()
		return
	}

	const mime =
		(mimes as { [key: string]: string })[path.split('.').pop() ?? 'bin'] ??
		mimes['bin']

	let body: Buffer

	try {
		const url = new URL(
			'../dist/.' + (path === '/' ? '/index.html' : path),
			import.meta.url,
		)
		body = await readFile(url as unknown as string)
	} catch {
		res.writeHead(404, { 'content-length': 0 }).end()
		return
	}

	res.writeHead(200, {
		'content-type': mime,
		'content-length': body.byteLength,
	}).end(body)
})

const main = async () => {
	const localhosts = Object.values(networkInterfaces())
		.flat()
		.filter(
			(v): v is Extract<typeof v, { family: 'IPv4' }> =>
				v?.family === 'IPv4',
		)
		.map(v => v.address)

	const port =
		process.argv
			.slice(2)
			.find(arg => /^--port=(\d+)$/.test(arg))
			?.split('--port=')[1] ?? 8080

	server.listen(port, () => {
		localhosts.forEach(ip => {
			console.log(`\thttp://${ip}:${port}`)
		})
	})
}

main()
