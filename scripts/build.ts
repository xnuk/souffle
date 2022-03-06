// #!/usr/bin/env node
import { build, BuildOptions, Plugin, serve } from 'esbuild'
import { unlink, writeFile, mkdir } from 'fs/promises'
import { pathToFileURL, fileURLToPath, URL } from 'url'
import { isAbsolute } from 'path'
import { networkInterfaces } from 'os'

import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin'

const basePath = new URL('../', import.meta.url)
const resolve = (str: string, base: string | URL = basePath): URL =>
	new URL(str, typeof base === 'string' ? pathToFileURL(base) : base)

const chars = (sr: string): string[] => {
	const start = sr.charCodeAt(0)
	const end = sr.charCodeAt(1)

	return Array.from({ length: end - start + 1 }, (_, i) =>
		String.fromCharCode(start + i),
	)
}

type BuildOpt = Omit<BuildOptions, 'outdir'> & { outdir: URL }

const common = (opts: BuildOpt): BuildOptions => ({
	jsxFactory: '_jsx',
	jsxFragment: '_jsxs',
	inject: [fileURLToPath(resolve('./scripts/preact-shim.js'))],
	bundle: true,
	define: {
		'process.env.NODE_ENV': !!opts.minify
			? '"production"'
			: '"development"',
		'import.meta.hot': !!opts.watch + '',
	},
	charset: 'utf8',
	...opts,
	outdir: fileURLToPath(opts.outdir),
})

const htmlResolver = (opts: BuildOpt): Plugin => ({
	name: 'htmlResolver',
	setup(b) {
		b.onResolve({ filter: /index\.html$/ }, args => {
			const path = fileURLToPath(
				new URL(args.path + '.tsx', pathToFileURL(args.importer)).href,
			)
			return {
				path,
				namespace: 'html',
				sideEffects: true,
				watchFiles: [path],
			}
		})

		b.onLoad({ filter: /.*/, namespace: 'html' }, async args => {
			console.log(b.initialOptions.sourceRoot)
			const result = await build({
				...common(opts),
				entryPoints: {
					html: args.path,
				},
				format: 'esm',
				target: ['node17'],
				external: chars('az').map(v => v + '*'),
				plugins: [vanillaExtractPlugin({ outputCss: false })],
			})

			const dist = new URL('html.js', opts.outdir)

			const contents = (await import(dist.href)).default
			await Promise.all([
				unlink(dist).catch(() => {}),
				writeFile(new URL('index.html', opts.outdir), contents),
			])

			return {
				errors: result.errors,
				warnings: result.warnings,
				contents,
				loader: 'file',
				watchFiles: [args.path],
			}
		})
	},
})

const builder = <T extends (option: BuildOptions) => any>(
	build: T,
	opts: BuildOpt,
): ReturnType<T> =>
	build({
		...common(opts),
		entryPoints: [fileURLToPath(resolve('./src/index.tsx'))],
		format: 'esm',
		target: ['chrome75', 'firefox82'],
		external: ['preact-render-to-string'],
		plugins: [vanillaExtractPlugin(), htmlResolver(opts)],
	})

const absolute = (str: string, cwd: string = process.cwd()): URL => {
	if (isAbsolute(str)) return pathToFileURL(str)

	const current = pathToFileURL(cwd)
	current.href += '/' // YEAH

	return resolve(str + '/', current)
}

interface Opts {
	outdir: string
	watch: boolean
	minify: boolean
}

export const main = async (opts: Opts, port?: string | number | undefined) => {
	const options = { ...opts, outdir: absolute(opts.outdir) }

	await mkdir(opts.outdir, { recursive: true })

	const result = await builder(
		port != null
			? serve.bind(null, { port: 8080, servedir: opts.outdir })
			: build,
		options,
	)

	if ('port' in result && result.port != null) {
		const port = result.port
		Object.values(networkInterfaces())
			.flat()
			.forEach(ip => {
				if (ip == null) return
				if (ip.family === 'IPv4') {
					console.log(`\t http://${ip.address}:${port}`)
				} else if (ip.family === 'IPv6') {
					console.log(`\t http://[${ip.address}]:${port}`)
				}
			})
	}
}

const argv = process.argv.slice(2)
const port = argv.find(arg => /^--port=(\d+)$/.test(arg))?.split('--port=')[1]

main(
	{
		minify: argv.includes('--minify'),
		watch: argv.includes('--watch'),
		outdir:
			argv.find(dir => !dir.startsWith('--') && dir.trim().length > 0) ||
			'dist',
	},
	port,
).catch(e => {
	console.log(e.message)
	process.exit(1)
})
