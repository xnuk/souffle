import { hydrate, render } from 'preact'
import { Main } from './app'
import './index.ss'

;(import.meta.hot ? hydrate : render)(<Main />, document.body)
