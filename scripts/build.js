#!/usr/bin/env node
import { build } from 'esbuild'
import { unlink, writeFile, mkdir } from 'fs/promises'
import { pathToFileURL, fileURLToPath } from 'url'
import { resolve as path, isAbsolute } from 'path'

process.env.NODE_ENV = 'production'

const basePath = new URL('../', import.meta.url)
const resolve = (str, base = basePath) => new URL(str, base)

const common = opts => (
	{ jsxFactory: '_jsx'
	, jsxFragment: '_jsxs'
	, inject: [fileURLToPath(resolve('./scripts/preact-shim.js'))]
	, bundle: true
	, define: {
		'process.env.NODE_ENV': !!opts.minify,
		'import.meta.hot': !!opts.watch,
	}
	, charset: 'utf8'
	, ...opts
	, outdir: fileURLToPath(opts.outdir)
	}
)

const html = async (outfile, opts = {}) => {
	const cache = resolve('.cached.html.mjs', opts.outdir)
	const compiled = await build(
		{ ...common(opts)
		, entryPoints: [fileURLToPath(resolve('./src/index.html.tsx'))]
		, format: 'esm'
		, watch: false
		, write: false
		, external: ['p*', 'f*', 'c*']
		}
	)

	await writeFile(cache, compiled.outputFiles[0].contents)

	const html = (await import(cache)).default
	return Promise.all([
		unlink(cache),
		writeFile(outfile, html),
	])
}

const sass = async (file, opts = {}) => {
	const { render } = (await import('sass')).default
	return new Promise((ok, error) =>
		render({
			file,
			outputStyle: opts.minify ? 'compressed' : 'expanded',
			indentType: 'tab',
			linefeed: 'lf',
			sourceMap: false,
		}, async (err, result) => {
			if (err) error(err)
			ok({ contents: result.css, loader: 'css' })
		})
	)
}

const index = async (opts = {}) => build(
	{ ...common(opts)
	, entryPoints: [fileURLToPath(resolve('./src/index.tsx'))]
	, format: 'iife'
	, target: ['chrome75', 'firefox82']
	, plugins: [{
		name: 'sass',
		setup(build) {
			build.onLoad({ filter: /\.sass$/ }, args => {
				return sass(args.path, opts)
			})
		}
	}]
	}
)

const absolute = str => isAbsolute(str)
	? pathToFileURL(str)
	: resolve(str + '/', pathToFileURL(process.cwd()).href + '/')

export const main = async (opts = {}) => {
	opts.outdir = absolute(opts.outdir)

	await mkdir(opts.outdir, { recursive: true })

	await Promise.all([
		index(opts),
		html(resolve('index.html', opts.outdir), opts)
	])
}

const argv = process.argv.slice(2)

main(
	{ minify: argv.includes('--minify')
	, watch: argv.includes('--watch')
	, outdir: argv.find(dir => !dir.startsWith('--') && dir.trim().length > 0)
		|| 'dist'
	}
)
