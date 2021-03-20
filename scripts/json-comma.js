#!/usr/bin/env node
import { readFile, writeFile } from 'fs/promises'

const walk = value => {
	if (value == null || typeof value !== 'object')
		return JSON.stringify(value)

	if (Array.isArray(value))
		return '\n[ ' + value.map(v => walk(v)).join('\n, ') + '\n]'

	return '\n{ ' +
		Object.entries(value)
			.map(([key, value]) =>
				JSON.stringify(key) + ': ' + walk(value))
			.join('\n, ') + '\n}'
}

export const main = async (...argv) => {
	const path = argv

	if (path.length <= 0) {
		return Promise.reject('Cannot find json file.')
	}

	await Promise.all(path.map(async path => {
		const text = await readFile(path, 'utf8')
		const obj = JSON.parse(text)
		const result = (obj == null || typeof obj !== 'object')
			? text
			: walk(obj).trim() + '\n'

		await writeFile(path, result, 'utf8')
		return result
	}))

	return ''
}

main(...process.argv.slice(2)).then(
	console.log, e => (console.error(e), process.exit(1))
)
