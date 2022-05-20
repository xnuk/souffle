import type { FunctionComponent as FC } from 'preact'

import { useHistory } from './history'
import { Popup } from './popup'
import { find } from './find-item-number'

import * as styles from './item.module.css'

export const tartoUrl = (name: string) => {
	const index = find(name)

	return index === -1
		? 'https://ff14.tar.to/item/list/' +
				'?redirect=true&quick-search-option=item&limit=2&keyword=' +
				encodeURIComponent(name)
		: 'https://ff14.tar.to/item/view/' + index
}

const Tarto: FC<{ name: string }> = ({ name }) => (
	<Popup class={styles.linkTarto} href={tartoUrl(name)}>
		{name}
	</Popup>
)

const Existance: FC<{
	exists: { readonly [key: string]: readonly string[] }
}> = ({ exists }) => (
	<ul className={styles.existance}>
		{Object.entries(exists).map(([key, value]) => (
			<li key={key}>
				{key}: {value.join(', ')}
			</li>
		))}
	</ul>
)

export const Item: FC<{
	name: string
	exists?: { readonly [key: string]: readonly string[] }
}> = ({ name, exists }) => {
	const [history, modifyHistory] = useHistory()

	return (
		<li class={styles.item}>
			<Tarto name={name} />
			{exists && <Existance exists={exists} />}
			<button
				class={styles.deleteItemBtn}
				onClick={() => {
					modifyHistory(history.filter(value => value !== name))
				}}
			>
				✘
			</button>
		</li>
	)
}
