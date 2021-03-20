import { hydrate, render } from 'preact'
import { Main } from './app'
import './index.sass'
import './index.html.tsx'


;(import.meta.hot ? hydrate : render)(<Main />, document.body)
