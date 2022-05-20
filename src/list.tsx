import { useEffect, useState } from 'preact/hooks'

import { useHistory } from './history'
import { usePopup } from './popup'
import { useConfig } from './config'
import { tartoUrl, Item } from './item'
import { useItemQueryFilter, useExistsItemQueryFilter } from './filters'

export const List = () => {
	const [history, modifyHistory] = useHistory()
	const openPopup = usePopup()
	const itemName = useItemQueryFilter()
	const exists = useExistsItemQueryFilter()
	const tarto = useConfig('tartoPopup')[0]
	const [lastItemName, setLastItemName] = useState(itemName)
	const [existsCache, setExistsCache] = useState(
		{} as {
			readonly [itemName: string]: {
				readonly [place: string]: readonly string[]
			}
		},
	)

	useEffect(() => {
		if (itemName == null) return
		setLastItemName(itemName)
	}, [itemName])

	useEffect(() => {
		if (itemName == null) return

		const newone = history.filter(value => value !== itemName)
		newone.unshift(itemName)
		modifyHistory(newone)

		if (tarto) openPopup(tartoUrl(itemName))
	}, [itemName])

	useEffect(() => {
		if (lastItemName == null || exists == null) return
		setExistsCache(prev => {
			const orig: readonly string[] =
				prev[lastItemName]?.[exists.place] || []
			const ins = `${exists.count}개(${exists.tab}탭)`

			return {
				...prev,
				[lastItemName]: {
					...(prev[lastItemName] || {}),
					[exists.place]: orig.includes(ins)
						? orig
						: orig.concat([ins]),
				},
			}
		})
	}, [lastItemName, exists])

	return (
		<ul class="item-list">
			{history.map(name => (
				<Item key={name} name={name} exists={existsCache[name]} />
			))}
		</ul>
	)
}
