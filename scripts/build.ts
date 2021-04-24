// #!/usr/bin/env node
import { build, BuildOptions, OnLoadResult } from 'esbuild'
import { unlink, readFile, writeFile, mkdir } from 'fs/promises'
import { pathToFileURL, fileURLToPath, URL } from 'url'
import { isAbsolute } from 'path'

import Postcss, { ProcessOptions } from 'postcss'

process.env['NODE_ENV'] = 'production'

const basePath = new URL('../', import.meta.url)
const resolve = (str: string, base = basePath): URL => new URL(str, base)

const chars = (sr: string): string[] => {
	const start = sr.charCodeAt(0)
	const end = sr.charCodeAt(1)

	return Array.from({ length: end - start + 1 }, (_, i) =>
		String.fromCharCode(start + i)
	)
}

type BuildOpt = Omit<BuildOptions, 'outdir'> & {outdir: URL}

const common = (opts: BuildOpt): BuildOptions => (
	{ jsxFactory: '_jsx'
	, jsxFragment: '_jsxs'
	, inject: [fileURLToPath(resolve('./scripts/preact-shim.js'))]
	, bundle: true
	, define: {
		'process.env.NODE_ENV': !!opts.minify + '',
		'import.meta.hot': !!opts.watch + '',
	}
	, charset: 'utf8'
	, ...opts
	, outdir: fileURLToPath(opts.outdir)
	}
)

const html = async (outfile: URL, opts: BuildOpt) => {
	const cache = resolve('.cached.html.mjs', opts.outdir)
	const compiled = await build(
		{ ...common(opts)
		, entryPoints: [fileURLToPath(resolve('./src/index.html.tsx'))]
		, format: 'esm'
		, watch: false
		, write: false
		, external: chars('az').map(v => v + '*')
		}
	)

	await writeFile(cache, compiled.outputFiles[0]?.contents || '')

	const html = (
		await import(cache.href) as
		typeof import('../src/index.html')
	).default
	return Promise.all([
		unlink(cache),
		writeFile(outfile, html),
	])
}

const getPostcss = (async () => {
	const text = await readFile(resolve('package.json'), 'utf8')
	const json = JSON.parse(text) as typeof import('../package.json')

	const plugins = (
		Object.keys(json.devDependencies) as
		(keyof typeof json['devDependencies'])[]
	).filter(v => v.startsWith('postcss-')).map(async v => (await import(v)).default)

	const parser = await import('sugarss').then(v => v.parse)
	const postcss = Postcss(await Promise.all(plugins))

	return (file: string, path: Pick<ProcessOptions, 'from' | 'to'>) =>
		postcss.process(file, {
			...path,
			parser
		})
})()

const index = async (opts: BuildOpt) => build(
	{ ...common(opts)
	, entryPoints: [fileURLToPath(resolve('./src/index.tsx'))]
	, format: 'iife'
	, target: ['chrome75', 'firefox82']
	, plugins: [{
		name: 'postcss',
		setup(build) {
			build.onLoad({ filter: /\.ss$/ }, async args => {
				const text = await readFile(args.path, 'utf8')
				const func = await getPostcss
				try {
					const a = await func(text, {from: args.path})
					const result: OnLoadResult = {
						contents: opts.minify ? new (await import('clean-css' as string)).default().minify(a.css).styles : a.css,
						warnings: a.warnings().map(v => ({
							text: v.text,
							location: {
								column: v.column,
								line: v.line,
								lineText: v.node.toString()
							}
						})),
						loader: 'css'
					}

					return result
				} catch (e: any) {
					if (e['name'] !== 'CssSyntaxError') throw e

					const err = e as import('postcss').CssSyntaxError

					const input = err.input
					console.error(err.showSourceCode(true))
					console.error()

					const result: OnLoadResult = {
						errors: [{
							text: err.reason,
							location: input ? {
								file: input.file,
								column: input.column - 1,
								line: input.line,
								lineText: input.source?.split('\n')[input.line - 1]
							} : undefined,
						}],
						loader: 'css'
					}

					return result
				}
			})
		}
	}]
	}
)

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

export const main = async (opts: Opts) => {
	const options = { ...opts, outdir: absolute(opts.outdir) }

	await mkdir(opts.outdir, { recursive: true })

	await Promise.all([
		index(options),
		html(resolve('index.html', options.outdir), options)
	])
}

const argv = process.argv.slice(2)

main(
	{ minify: argv.includes('--minify')
	, watch: argv.includes('--watch')
	, outdir: argv.find(dir => !dir.startsWith('--') && dir.trim().length > 0)
		|| 'dist'
	}
).catch(e => console.log(e.message))

