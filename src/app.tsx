import { useEffect } from 'preact/hooks'

import { useConfig } from './config'
import { List } from './list'
import { Provider } from './provider'
import { useWorkerState, useMeFilter } from './filters'
import { Setting } from './setting'

import styles from './app.module.ss'

const App = () => {
	const isWorker = useWorkerState()
	const hideWarrior = useConfig('hideWarrior')[0]
	const debugMode = useConfig('debugMode')[0]
	const log = useMeFilter()

	useEffect(() => {
		if (debugMode && log != null) console.log(log)
	}, [debugMode, log])

	return <main class={`${styles.app} ${styles.dark}`}>
		<Setting />
		{ hideWarrior && !isWorker ? null : <List /> }
	</main>
}

export const Main = () => <Provider><App /></Provider>
