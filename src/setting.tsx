import type { FunctionComponent as FC } from 'preact'
import { Config, useConfig } from './config'

type CheckableKeys = {
	[key in keyof Config]: boolean extends Config[key] ? key : never
}[keyof Config]

const Checkbox: FC<{
	name: CheckableKeys
}> = ({ name, children }) => {
	const [checked, setChecked] = useConfig(name)

	return <label class="checkbox-item">
		<input type="checkbox" checked={checked} onChange={
			event => setChecked(event.currentTarget.checked)
		} />
		<span>{ children }</span>
	</label>
}

export const Setting = () => <ul class="setting">
	<Checkbox name="tartoPopup">자동으로 타르토 열기</Checkbox>
	<Checkbox name="hideWarrior">전투직 전환 시 숨기기</Checkbox>
	<Checkbox name="debugMode">디버그 모드</Checkbox>
</ul>
