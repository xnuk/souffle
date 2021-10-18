export { useLogFilter } from './provider'

export type Line = [
	type: string,
	timestamp: string,
	subtype: string,
	...message: string[],
	guid: string,
]

export interface User {
	id: string
	name: string
}

export interface Listener {
	onLine?: (line: Line) => void
	onUser?: (user: User) => void
}
