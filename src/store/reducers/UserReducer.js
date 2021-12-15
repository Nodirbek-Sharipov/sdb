import { $authHost } from "../../http"
import { CachedStateUser } from "../../utils/helpers"

const SET_USER = 'SET_USER'
const SET_ORDERS = 'SET_ORDERS'
const SET_ORDER_MODAL = 'SET_ORDER_MODAL'
const SHOW_LOADER = 'SHOW_LOADER'
const HIDE_LOADER = 'HIDE_LOADER'

const defaultState = {
	user: JSON.parse(localStorage.getItem('user') || '{}'),
	orders: JSON.parse(localStorage.getItem('orders') || '[]'),
	orderModal:false,
	loading: false,
}

function UserReducer(state = defaultState, action) {
	switch (action.type) {
		case SET_USER:
			state.user = action.user
			return CachedStateUser('user', action.user, state)

		case SET_ORDERS:
			state.orders = action.orders
			return CachedStateUser('orders', action.orders, state)

		case SET_ORDER_MODAL:
			state.orderModal = action.bool
			return state

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
export const setOrderModal = (bool) => ({type: SET_ORDER_MODAL, bool: bool})

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


export const addOrder = (data, callback) => {
	return async (dispatch) =>{
		dispatch({type: SHOW_LOADER})
		$authHost.post(`/v1/order/create`, data).then((response) => {
			console.log(response.data.isOk)
			if(response.data.isOk){
				callback && callback(null)
				dispatch({ type: HIDE_LOADER })
			} else{
				callback && callback("Error message")
			}
		})
			.catch((error) => {
				callback && callback("Error message")
				dispatch({ type: HIDE_LOADER })
			})
	}
}

export default UserReducer