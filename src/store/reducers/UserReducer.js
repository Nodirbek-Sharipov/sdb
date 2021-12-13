import { $authHost } from "../../http"
import { CachedState } from "../../utils/helpers"

const SET_USER = 'SET_USER'
const SET_ORDERS = 'SET_ORDERS'
const SHOW_LOADER = 'SHOW_LOADER'
const HIDE_LOADER = 'HIDE_LOADER'

const defaultState = {
	user: JSON.parse(localStorage.getItem('user') || '{}'),
	orders: JSON.parse(localStorage.getItem('orders') || '[]'),
	loading: false
}

function UserReducer(state = defaultState, action) {
	switch (action.type) {
		case SET_USER:
			state.user = action.user
			return CachedState('user', action.user, state)

		case SET_ORDERS:
			state.orders = action.orders
			return CachedState('orders', action.orders, state)

		case SHOW_LOADER:
			state.loading = true
			return state

		case HIDE_LOADER:
			state.loading = false
			return state

		default:
			return state
	}
}


export const setUser = (user) => ({ type: SET_USER, user })
export const setOrders = (orders) =>({ type: SET_ORDERS, orders })

export const getUser = () =>{
	return async (dispatch) =>{
		dispatch({ type: SHOW_LOADER })
		$authHost.get(`/v1/user/profile`).then(function (response){
			if(response?.data?.orders && response?.data?.user) {
				dispatch(setUser(response?.data?.user || {}))
				dispatch(setOrders(response?.data?.orders || []))
			}
			dispatch({ type: HIDE_LOADER })
		}).catch(error => {
			console.log(error)
			dispatch({ type: HIDE_LOADER })
		})
	}
}

export default UserReducer