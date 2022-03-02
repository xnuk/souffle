import { createContext, FunctionComponent as FC } from 'preact'
import { useContext } from 'preact/hooks'

import { LOCAL, useStorage } from './storage'

const defaultConfig = {
	version: 1,
	tartoPopup: false,
	debugMode: false,
	hideWarrior: false,
	hideOnCombat: false,
	layoutMode: false,
}

export type Config = typeof defaultConfig

const ConfigContext = createContext([
	defaultConfig as Readonly<Config>,
	(_: Readonly<Config>) => {},
] as const)

export const ConfigProvider: FC = ({ children }) => {
	const [config, setConfig] = useStorage(LOCAL, 'config', defaultConfig)

	if (config.version !== defaultConfig.version) setConfig(defaultConfig)

	return (
		<ConfigContext.Provider
			value={[config, setConfig]}
			children={children}
		/>
	)
}

export const useConfig = <K extends keyof Config>(key: K) => {
	const [config, setConfig] = useContext(ConfigContext)
	return [
		config[key],
		(conf: Config[K]) => setConfig({ ...config, [key]: conf }),
	] as const
}
