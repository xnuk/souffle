// #!/usr/bin/env node
import { build, BuildOptions, OnLoadResult, PluginBuild } from 'esbuild'
import { unlink, readFile, writeFile, mkdir } from 'fs/promises'
import { pathToFileURL, fileURLToPath, URL } from 'url'
import { isAbsolute } from 'path'

import Postcss, {
	ProcessOptions,
	Plugin,
	CssSyntaxError,
	Warning,
} from 'postcss'

process.env['NODE_ENV'] = 'production'

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
		'process.env.NODE_ENV': !!opts.minify + '',
		'import.meta.hot': !!opts.watch + '',
	},
	charset: 'utf8',
	...opts,
	outdir: fileURLToPath(opts.outdir),
})

const html = async (outfile: URL, opts: BuildOpt) => {
	const cache = resolve('.cached.html.mjs', opts.outdir)
	const compiled = await build({
		...common(opts),
		entryPoints: [fileURLToPath(resolve('./src/index.html.tsx'))],
		format: 'esm',
		watch: false,
		write: false,
		external: chars('az').map(v => v + '*'),
		target: 'node16',
		plugins: [{ name: 'postcss', setup: postcssSetup('json') }],
	})

	await writeFile(cache, compiled.outputFiles[0]?.contents || '')

	const html = (
		(await import(cache.href)) as typeof import('../src/index.html')
	).default
	return Promise.all([unlink(cache), writeFile(outfile, html)])
}

const css = async (outfile: URL, opts: BuildOpt) => {
	const compiled = await build({
		...common(opts),
		entryPoints: [fileURLToPath(resolve('./src/index.tsx'))],
		format: 'esm',
		watch: false,
		write: false,
		external: chars('az').map(v => v + '*'),
		target: 'node16',
		plugins: [{ name: 'postcss', setup: postcssSetup('css') }],
	})
	const text =
		compiled.outputFiles.filter(v => v.path.endsWith('.css'))[0]
			?.contents || ''
	await writeFile(outfile, text)
}

interface AtomSend<T> {
	resolve(_: T | Promise<T>): void
	reject(_: any): void
}

interface Atom<T> {
	value: Promise<T>
	send: AtomSend<T>
}

const Atom = <T>(): Atom<T> => {
	const send: AtomSend<T> = {
		resolve: _ => {
			throw 'empty resolve called'
		},
		reject: _ => {
			throw 'empty reject called'
		},
	}

	const value = new Promise<T>((a, b) => {
		send.resolve = a
		send.reject = b
	})

	return { value, send }
}

const getPostcss = (async (minify: boolean = false) => {
	const CssVar = (): Plugin => ({
		postcssPlugin: 'postcss-css-vars',
		Declaration(decl) {
			if (decl.value.includes('$')) {
				decl.value = decl.value.replace(/\$([-\w]+)/g, 'var(--$1)')
			}
			if (decl.prop.startsWith('$')) {
				decl.prop = '--' + decl.prop.substring(1)
			}
		},
	})
	CssVar.postcss = true

	const classes = {} as { [key: string]: Atom<string> }
	const cache = {} as {
		[key: string]: Atom<{
			css: string
			warnings: Warning[]
			json: string | null
		}>
	}

	const plugins = [
		import('postcss-discard-comments' as string).then(v => v.default),
		import('postcss-nesting' as string).then(v => v.default),
		CssVar,
		import('postcss-modules' as string).then(v =>
			v.default({
				globalModulePaths: [/index\.ss$/],
				getJSON(
					cssFilename: string,
					json: { [key: string]: string },
					_: string,
				) {
					if (!cssFilename.includes('.module.')) return

					const text = JSON.stringify(json)
					classes[cssFilename]?.send.resolve(text)
					writeFile(cssFilename + '.d.ts', `export default ${text}`)
				},
				localsConvention: 'camelCaseOnly',
				// , generateScopedName(name: string, filename: string) {
				// return '__' + filename.replace(/[^\w]/g, '_') + '__' + name
				// }
			}),
		),
	]

	const minifyFunc = minify
		? (async () => {
				const clean = (await import('clean-css' as string)).default()
				return (css: string) => clean.minify(css).styles as string
		  })()
		: null

	const parser = await import('sugarss').then(v => v.parse)
	const minifier = (await minifyFunc) || (v => v)
	const postcss = Postcss(await Promise.all(plugins))

	const func = async (
		file: string,
		path: Pick<ProcessOptions, 'from' | 'to'>,
	) => {
		if (!path.from) throw 'path.from is not given'

		const cached = cache[path.from]
		if (cached) return await cached.value

		const atom = (cache[path.from] = Atom())
		const json =
			path.from.includes('.module.') && (classes[path.from] = Atom())

		const post = await postcss.process(file, {
			...path,
			parser,
		})

		const css = minifier(post.css)
		const warnings = post.warnings()
		const result = { css, warnings, json: json ? await json.value : null }

		atom.send.resolve(result)
		return result
	}

	return func
})()

const postcssSetup = (format: 'json' | 'css') => async (build: PluginBuild) => {
	const postcss = await getPostcss
	build.onLoad({ filter: /\.ss$/ }, async args => {
		const text = await readFile(args.path, 'utf8')
		try {
			const { css, json, warnings } = await postcss(text, {
				from: args.path,
			})
			const warn = warnings.map(v => ({
				text: v.text,
				location: {
					column: v.column,
					line: v.line,
					lineText: v.node.toString(),
				},
			}))

			if (format === 'css')
				return { warnings: warn, contents: css, loader: 'css' }
			if (format === 'json')
				return {
					warnings: warn,
					contents: json || '{}',
					loader: 'json',
				}

			return null
		} catch (e: any) {
			if (e['name'] !== 'CssSyntaxError') throw e

			const err = e as CssSyntaxError

			const input = err.input
			console.error(err.showSourceCode(true))
			console.error()

			const result: OnLoadResult = {
				errors: [
					{
						text: err.reason,
						location: input
							? {
									file: input.file,
									column: input.column - 1,
									line: input.line,
									lineText:
										input.source?.split('\n')[
											input.line - 1
										],
							  }
							: undefined,
					},
				],
				loader: 'css',
			}

			return result
		}
	})
}

const index = async (opts: BuildOpt) =>
	build({
		...common(opts),
		entryPoints: [fileURLToPath(resolve('./src/index.tsx'))],
		format: 'iife',
		target: ['chrome75', 'firefox82'],
		plugins: [{ name: 'postcss', setup: postcssSetup('json') }],
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

export const main = async (opts: Opts) => {
	const options = { ...opts, outdir: absolute(opts.outdir) }

	await mkdir(opts.outdir, { recursive: true })

	// 세 번 타는 보일러
	await Promise.all([
		index(options),
		html(resolve('index.html', options.outdir), options),
		css(resolve('index.css', options.outdir), options),
	])
}

const argv = process.argv.slice(2)

main({
	minify: argv.includes('--minify'),
	watch: argv.includes('--watch'),
	outdir:
		argv.find(dir => !dir.startsWith('--') && dir.trim().length > 0) ||
		'dist',
}).catch(e => {
	console.log(e.message)
	process.exit(1)
})
