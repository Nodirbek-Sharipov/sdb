import {useSelector} from "react-redux";

const ADD_ITEM_CATEGORY = 'ADD_ITEM_CATEGORY';


let defaultState = {
    cart:[],
}

function CartReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_ITEM_CATEGORY:
            state.cart.push(action.product);
            return state;

        default:
            return state;
    }
}

export const addItemCategory = (product) => ({type: ADD_ITEM_CATEGORY, product: product})
export default CartReducer;