import type { VNode } from 'preact'

export type Children<P = {}> =
	| VNode<P>
	| string
	| false
	| null
	| undefined
	| Children<P>[]

export type FC<T> = (props: T) => VNode<{}> | null

type MayWithFC<T, R> = null extends T ? R : FC<T & R>
export type WithChildren<T = null> = MayWithFC<T, { children?: Children }>
