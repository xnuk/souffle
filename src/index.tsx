import { hydrate, render } from 'preact'
import { Main } from './app'
import './index.html'
;(import.meta.hot ? hydrate : render)(<Main />, document.body)
