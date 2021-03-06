import type { FunctionComponent as FC } from 'preact'

import { useHistory } from './history'
import { Popup } from './popup'

import styles from './item.module.ss'

export const tartoUrl = (name: string) => 'https://ff14.tar.to/item/list/'
	+ '?redirect=true&quick-search-option=item&limit=2&keyword='
	+ encodeURIComponent(name)

const Tarto: FC<{ name: string }> = ({ name }) =>
	<Popup class={styles.linkTarto} href={tartoUrl(name)}>{name}</Popup>

export const Item: FC<{ name: string }> = ({ name }) => {
	const [ history, modifyHistory ] = useHistory()

	return <li class={styles.item}>
		<Tarto name={name} />
		<button class={styles.deleteItemBtn} onClick={() => {
			modifyHistory(history.filter(value => value !== name))
		}}>✘</button>
	</li>
}
