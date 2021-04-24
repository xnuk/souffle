interface ImportMeta {
	url: string,
	hot: boolean,
}

declare module 'sugarss' {
	import type { Parser, Stringifier } from 'postcss'
	export const stringify: Stringifier
	export const parse: Parser
}
