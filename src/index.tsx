import { hydrate, render } from 'preact'
import { Main } from './app'
import { reloadListener } from './dev-server'
import './index.ss'
;(import.meta.hot ? hydrate : render)(<Main />, document.body)

if (import.meta.hot) {
	reloadListener && reloadListener()
}
