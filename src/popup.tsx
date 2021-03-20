import { createContext, FunctionComponent as FC } from 'preact'
import { useContext, useState } from 'preact/hooks'

const popupName = 'souffle-popup'

const PopupContext = createContext({
	openPopup: (_url: string) => {},
} as const)

export const PopupProvider: FC = ({ children }) => {
	const [popup, setPopup] = useState(null as Window | null)

	return <PopupContext.Provider
		children={children}
		value={{openPopup: url => {
			if (popup != null) {
				popup.close()
			}

			const pop = window.open(
				url, popupName, 'width=700,height=700'
			)
			pop?.focus()
			setPopup(pop)
		}}}
	/>
}

export const Popup: FC<{
	href: string, class?: string
}> = ({ href, class: cn, children }) => {
	const { openPopup } = useContext(PopupContext)

	return <a
		class={cn}
		href={href}
		target={popupName}
		children={children}
		onClick={event => {
			event.preventDefault()
			openPopup(href)
		}}
	/>
}

export const usePopup = () => useContext(PopupContext).openPopup
