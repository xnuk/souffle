import { useContext, useEffect } from 'preact/hooks'

import { useConfig } from './config'
import { List } from './list'
import { Provider } from './provider'
import { useWorkerState, useMeFilter } from './filters'
import { Setting } from './setting'
import { InCombatContext } from './message'

import styles from './app.module.ss'

const App = () => {
	const isWorker = useWorkerState()
	const hideWarrior = useConfig('hideWarrior')[0]
	const debugMode = useConfig('debugMode')[0]
	const hideOnCombat = useConfig('hideOnCombat')[0]
	const [layoutMode, setLayoutMode] = useConfig('layoutMode')
	const log = useMeFilter()
	const inCombat = useContext(InCombatContext)

	useEffect(() => {
		if (debugMode && log != null) console.log(log)
	}, [debugMode, log])

	useEffect(() => {
		const classes = document.body.classList
		const className = 'layout-mode'

		if (layoutMode) {
			classes.add(className)
			document.body.addEventListener(
				'click',
				() => {
					setLayoutMode(false)
				},
				{ once: true },
			)
		} else classes.remove(className)
	}, [layoutMode])

	return (
		<main
			class={`${styles.app} ${styles.dark} ${
				hideOnCombat && inCombat ? styles.hide : ''
			}`}
		>
			<Setting />
			{hideWarrior && !isWorker ? null : <List />}
		</main>
	)
}

export const Main = () => (
	<Provider>
		<App />
	</Provider>
)
