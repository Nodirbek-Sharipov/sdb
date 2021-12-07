import {$authHost} from "../../http";
const GET_PRODUCT = 'GET_PRODUCT';
const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';

let defaultState = {
    product: {},
    loading: true,
}

function ProductReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_PRODUCT:
            state.product = action.payload.product;
            return state;

        case SHOW_LOADER:
            state.loading = true
            return state

        case HIDE_LOADER:
            state.loading = false
            return state

        default:
            return state;
    }
}


export const setProduct = (payload) =>({type:GET_PRODUCT, payload: payload})

export const getProduct = (slug) =>{
    return async (dispatch) =>{
        dispatch({ type: SHOW_LOADER })
        $authHost.get(`/v1/product/${slug}`).then(function (response){
            console.log(response.data)
            dispatch(setProduct(response.data))
            dispatch({ type: HIDE_LOADER })
        }).catch(error => {console.log(error);});
    }
}

export default ProductReducer;