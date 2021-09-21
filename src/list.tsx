import { useEffect } from 'preact/hooks'

import { useHistory } from './history'
import { usePopup } from './popup'
import { useConfig } from './config'
import { tartoUrl, Item } from './item'
import { useItemQueryFilter } from './filters'

export const List = () => {
	const [history, modifyHistory] = useHistory()
	const openPopup = usePopup()
	const itemName = useItemQueryFilter()
	const tarto = useConfig('tartoPopup')[0]

	useEffect(() => {
		if (itemName == null) return

		const newone = history.filter(value => value !== itemName)
		newone.unshift(itemName)
		modifyHistory(newone)

		if (tarto) openPopup(tartoUrl(itemName))
	}, [itemName])

	return (
		<ul class="item-list">
			{history.map(name => (
				<Item key={name} name={name} />
			))}
		</ul>
	)
}
