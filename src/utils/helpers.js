export const CachedState = (key, state_to_save, state_to_return) => {
	localStorage.setItem(key, JSON.stringify(state_to_save))
	return state_to_return
}