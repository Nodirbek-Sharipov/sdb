const SET_LANG = 'SET_LANG'

const defaultState = {
	lang: localStorage.getItem('lang') || 'uz', // 'uz', // 'ru'
}

function LangReducer(state = defaultState, action) {
	switch (action.type) {
		case SET_LANG:
			return {
				lang: action.lang
			}

		default:
			return state
	}
}


export const setLang = (lang) => ({ type: SET_LANG, lang })

export default LangReducer