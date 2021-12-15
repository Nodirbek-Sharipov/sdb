import { CachedState } from './../../utils/helpers';
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const ADJUST_QTY = 'ADJUST_QTY'
const SET_CART = 'SET_CART'

let defaultState = {
	cart: JSON.parse(localStorage.getItem('card'))  || [],
}

function CartReducer(state = defaultState, action) {
	switch (action.type) {
		case ADD_TO_CART:
			const item = action.payload
			const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false)
			state.cart = inCart ? state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1} : item) : [...state.cart, {...item, qty: action.qty ?  action.qty : 1}]
			//return {
			//	...state,
			//	cart: inCart ? state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1} : item) : [...state.cart, {...item, qty: action.qty ?  action.qty : 1}]
			//}
			return CachedState('cart', state)

		case REMOVE_FROM_CART:
			state.cart = state.cart.filter(item => item.id !== action.payload)
			//return{
			//	...state,
			//	cart: state.cart.filter(item => item.id !== action.payload)
			//}
			return CachedState('cart', state)

		case ADJUST_QTY:
			state.cart = state.cart.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty} : item)
			return CachedState('cart', state)

			//return {
			//	...state,
			//	cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty} : {...item, qty: action.payload.qty})
			//}

		case SET_CART:
			state.cart = action.payload
			return state
			
		default:
			return state
	}
}

export const addToCart = (item, qty) => ({type: ADD_TO_CART, payload: item, qty: qty})
export const removeFromCart = (id) => ({type: REMOVE_FROM_CART, payload: id})
export const adjustQty = (id, value) => ({type: ADJUST_QTY, payload:{id: id, qty: value}})
export const setCart = (payload) => ({type: SET_CART, payload:payload})


export default CartReducer