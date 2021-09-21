import type { FunctionComponent as FC } from 'preact'
// import { useState } from 'preact/hooks'
import { Config, useConfig } from './config'

import styles from './setting.module.ss'

type CheckableKeys = {
	[key in keyof Config]: boolean extends Config[key] ? key : never
}[keyof Config]

const Checkbox: FC<{
	name: CheckableKeys
}> = ({ name, children }) => {
	const [checked, setChecked] = useConfig(name)

	return (
		<label class={styles.checkboxItem}>
			<input
				type="checkbox"
				checked={checked}
				onChange={event => setChecked(event.currentTarget.checked)}
			/>
			<span class={styles.checkboxText}>{children}</span>
		</label>
	)
}

const Preferences = () => (
	<ul class={styles.section}>
		<Checkbox name="tartoPopup">자동으로 타르토 열기</Checkbox>
		<Checkbox name="hideWarrior">전투직 전환 시 숨기기</Checkbox>
		<Checkbox name="debugMode">디버그 모드</Checkbox>
	</ul>
)

const SettingMenu: FC = ({ children }) => {
	return (
		<details class={styles.setting}>
			<summary
				class={styles.toggleBtn}
				onClick={event => event.currentTarget.blur()}
			>
				<span class={styles.toggleText}>설정</span>
			</summary>
			<div class={styles.settingInner}>
				{children}
				<button onClick={() => window.location.reload()}>
					새로고침~~~~
				</button>
			</div>
		</details>
	)
}

export const Setting = () => (
	<SettingMenu>
		<Preferences />
	</SettingMenu>
)
