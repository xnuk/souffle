import { createContext, FunctionComponent as FC } from 'preact'
import { useContext } from 'preact/hooks'

import { SESSION, useStorage } from './storage'

const HistoryContext = createContext([
	[] as string[],
	(_: string[]) => {},
] as const)

export const HistoryProvider: FC = ({ children }) => (
	<HistoryContext.Provider
		value={useStorage(SESSION, 'item-history', [] as string[])}
		children={children}
	/>
)

export const useHistory = () => useContext(HistoryContext)
