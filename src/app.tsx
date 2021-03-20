import { useEffect } from 'preact/hooks'

import { useConfig } from './config'
import { List } from './list'
import { Provider } from './provider'
import { useWorkerState, useMeFilter } from './filters'
import { Setting } from './setting'

const App = () => {
	const isWorker = useWorkerState()
	const hideWarrior = useConfig('hideWarrior')[0]
	const debugMode = useConfig('debugMode')[0]
	const log = useMeFilter()

	useEffect(() => {
		if (debugMode && log != null) console.log(log)
	}, [debugMode, log])

	return <main>
		<button onClick={() => window.location.reload()}>새로고침~~~~</button>
		<Setting />
		{ hideWarrior && !isWorker ? null : <List /> }
	</main>
}

export const Main = () => <Provider><App /></Provider>
