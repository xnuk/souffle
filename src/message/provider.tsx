import { createContext, FunctionComponent as FC } from 'preact'
import { useState, useEffect, useContext } from 'preact/hooks'

import { listen as websocket } from './websocket'
import { listen as plugin } from './plugin'
import type { Line, User } from './'

const MessageContext = createContext(null as Line | null)
const UserNameContext = createContext(null as User | null)

export const MessageProvider: FC = ({ children }) => {
	const [line, setLine] = useState(null as Line | null)
	const [user, setUser] = useState(null as User | null)

	useEffect(() => {
		const listener = { onLine: setLine, onUser: setUser }

		const ws = websocket(listener)
		if (ws) return ws

		return plugin(listener)
	}, [])

	return (
		<UserNameContext.Provider value={user}>
			<MessageContext.Provider value={line}>
				{children}
			</MessageContext.Provider>
		</UserNameContext.Provider>
	)
}

export const useLogFilter = <T extends unknown>(
	func: (line: Line, user: User | null) => T,
): T | null => {
	const user = useContext(UserNameContext)
	const line = useContext(MessageContext)

	if (line == null) return null
	return func(line, user)
}
