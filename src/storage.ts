import { useState, useEffect } from 'preact/hooks'

const enum StorageType {
	Session,
	Local,
}

export const SESSION = StorageType.Session
export const LOCAL = StorageType.Local

interface GetSet<T> {
	get(): T | null,
	set(value: T): void,
}

const getStorage = <T = unknown>(
	type: StorageType, key: string
): GetSet<T> => {
	const storage = window[
		type === StorageType.Session ? 'sessionStorage' : 'localStorage'
	]

	return {
		get: () => {
			const str = storage.getItem(key)
			if (str == null) return null
			try {
				return JSON.parse(str) as T
			} catch (_) {
				return null
			}
		},
		set: (value: T) => {
			storage.setItem(key, JSON.stringify(value))
		},
	}
}

export const useStorage = <T>(
	type: StorageType,
	key: string,
	def: T
) => {
	const [value, setValue] = useState(def)
	const [storage, setStorage] = useState(null as GetSet<T> | null)

	// initialize
	useEffect(() => {
		const store = getStorage<T>(type, key)
		setStorage(store)
		const val = store.get()

		if (val == null) {
			store.set(value)
		} else {
			setValue(val)
		}

		return () => setStorage(null)
	}, [type, key])

	useEffect(() => {
		if (storage != null) {
			storage.set(value)
		}
	}, [value])

	return [value, setValue] as const
}
