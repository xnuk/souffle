import type { FunctionComponent as FC } from 'preact'

import { MessageProvider } from './overlay-plugin'
import { HistoryProvider } from './history'
import { PopupProvider } from './popup'
import { ConfigProvider } from './config'

const injectProviders =
	(...providers: FC<{}>[]): FC<{}> =>
	({ children }) =>
		providers.reduceRight(
			(children, Provider) => <Provider children={children} />,
			<>{children}</>,
		)

export const Provider = /* @__PURE__ */ injectProviders(
	ConfigProvider,
	MessageProvider,
	HistoryProvider,
	PopupProvider,
)
