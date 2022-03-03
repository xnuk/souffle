import type { FunctionComponent as FC } from 'preact'
import { useState } from 'preact/hooks'

import { Config, useConfig } from './config'
import { JobIcon } from './job-icon'
import { FishTimer } from './fish-timer'

import * as styles from './setting.module.css'

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

const Subtext: FC<{}> = ({ children }) => (
	<span className={styles.subtext}>{children}</span>
)

const Preferences = () => (
	<ul class={styles.section}>
		<Checkbox name="tartoPopup">자동으로 타르토 열기</Checkbox>
		<Checkbox name="hideWarrior">전투직일 때 목록 숨기기</Checkbox>
		<Checkbox name="hideOnCombat">
			전투 중 숨기기 <Subtext>(Cactbot 필요)</Subtext>
		</Checkbox>
		<Checkbox name="layoutMode">
			크기 조정 모드 <Subtext>(위치 잠금 해제 필요)</Subtext>
		</Checkbox>
		<Checkbox name="debugMode">디버그 모드</Checkbox>
	</ul>
)

const SettingMenu: FC = ({ children }) => {
	const [showFisher, setShowFisher] = useState(false)
	const debugMode = useConfig('debugMode')[0]

	return (
		<details class={styles.setting}>
			<summary
				class={`${styles.toggleBtn} ${
					showFisher ? styles.toggleBtnHovered : ''
				}`}
				onFocus={event => event.currentTarget.blur()}
			>
				<FishTimer
					class={styles.toggleText}
					onShowChange={setShowFisher}
				>
					<JobIcon class={styles.toggleText}>
						<span class={styles.toggleText}>설정</span>
					</JobIcon>
				</FishTimer>
			</summary>
			<div class={styles.settingInner}>
				{children}
				{debugMode && (
					<button onClick={() => window.location.reload()}>
						새로고침~~~~
					</button>
				)}
			</div>
		</details>
	)
}

export const Setting = () => (
	<SettingMenu>
		<Preferences />
	</SettingMenu>
)
