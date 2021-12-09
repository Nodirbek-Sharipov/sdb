const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const ADJUST_QTY = 'ADJUST_QTY';

let defaultState = {
    cart:[],
};

function CartReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;
            const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false);

            return {
                ...state,
                cart: inCart ? state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1} : item) : [...state.cart, {...item, qty: action.qty ?  action.qty : 1}]
            };

        case REMOVE_FROM_CART:
            return{
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            };

        case ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty} : {...item, qty: action.payload.qty})
            };
        default:
            return state;
    }
}

export const addToCart = (item, qty) => ({type: ADD_TO_CART, payload: item, qty: qty});
export const removeFromCart = (id) => ({type: REMOVE_FROM_CART, payload: id});
export const adjustQty = (id, value) => ({type: ADJUST_QTY, payload:{id: id, qty: value}});


export default CartReducer;