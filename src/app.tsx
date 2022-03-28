import { useContext, useEffect } from 'preact/hooks'

import { useConfig } from './config'
import { List } from './list'
import { Provider } from './provider'
import { useWorkerState, useMeFilter } from './filters'
import { Setting } from './setting'
import { LayoutMode } from './layout-mode'
import { InCombatContext } from './message'

import * as styles from './app.module.css'

import './index.css'

const App = () => {
	const isWorker = useWorkerState()
	const hideWarrior = useConfig('hideWarrior')[0]
	const debugMode = useConfig('debugMode')[0]
	const hideOnCombat = useConfig('hideOnCombat')[0]
	const log = useMeFilter()
	const inCombat = useContext(InCombatContext)

	useEffect(() => {
		if (debugMode && log != null) console.log(log)
	}, [debugMode, log])

	return (
		<main
			class={`${styles.app} ${
				hideOnCombat && inCombat ? styles.hide : styles.show
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
		<LayoutMode />
	</Provider>
)
