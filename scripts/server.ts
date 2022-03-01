import { createServer } from 'node:http'

import { readFile, watch } from 'node:fs/promises'
import { networkInterfaces } from 'node:os'

import { pathToFileURL } from 'node:url'

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

let lastChanged: number = 0
const updateLastChanged = (throttle = 3000) => {
	lastChanged = Math.floor(Date.now() / throttle) * throttle
}

const watcher = async (base: URL) => {
	updateLastChanged()
	const w = watch(base)
	let timeout = setTimeout(() => {}, 0)
	for await (const _ of w) {
		clearTimeout(timeout)
		timeout = setTimeout(updateLastChanged, 0)
	}
}

const normalizePath = (path: string): `/${string}` | null => {
	try {
		const { pathname } = new URL(path, 'http://localhost')
		return pathname[0] === '/' ? (pathname as `/${string}`) : null
	} catch {
		return null
	}
}

export const server = (base: URL) =>
	createServer(async (req, res) => {
		const { method, url: origUrl } = req
		const path = origUrl == null ? null : normalizePath(origUrl)
		if (!(method?.toUpperCase() === 'GET' && path != null)) {
			res.writeHead(400, { 'content-length': 0 }).end()
			return
		}

		if (path === '/_ping') {
			const headerSince = req.headers['if-modified-since']
			const since =
				headerSince == null ? NaN : new Date(headerSince).getTime()
			res.writeHead(since >= lastChanged ? 304 : 204, {
				'content-length': 0,
				'content-type': 'text/plain',
				'last-modified': new Date(lastChanged).toUTCString(),
				cache: 'no-cache',
			}).end()
			return
		}

		const mime =
			(mimes as { [key: string]: string })[
				path === '/' ? 'html' : path.split('.').pop() ?? 'bin'
			] ?? mimes['bin']

		let body: Buffer

		try {
			const url = new URL(
				'.' + (path === '/' ? '/index.html' : path),
				base,
			)
			body = await readFile(url)
		} catch {
			res.writeHead(404, { 'content-length': 0 }).end()
			return
		}

		res.writeHead(200, {
			'content-type': mime,
			'content-length': body.byteLength,
		}).end(body)
	})

export const main = async (base: URL, port: string | number = 8080) => {
	const localhosts = Object.values(networkInterfaces())
		.flat()
		.filter(
			(v): v is Extract<typeof v, { family: 'IPv4' }> =>
				v?.family === 'IPv4',
		)
		.map(v => v.address)

	watcher(base)
	server(base).listen(port, () => {
		localhosts.forEach(ip => {
			console.log(`\thttp://${ip}:${port}`)
		})
	})
}

if (
	process.argv[1] != null &&
	pathToFileURL(process.argv[1]).href === import.meta.url
) {
	const port = process.argv
		.slice(2)
		.find(arg => /^--port=(\d+)$/.test(arg))
		?.split('--port=')[1]
	main(new URL('../dist/', import.meta.url), port)
}
