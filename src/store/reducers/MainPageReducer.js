import {$authHost, $host} from "../../http";
const GET_PRODUCTS = 'GET_PRODUCTS';
const GET_RECOMMENDED_PRODUCTS = 'GET_RECOMMENDED_PRODUCTS';
const SET_IS_ACTIVE_MODAL = 'SET_IS_ACTIVE_MODAL';
const SHOW_LOADER = "SHOW_LOADER";
const HIDE_LOADER = "HIDE_LOADER";

let defaultState = {
    products:[],
    recommended_products: [],
    loading:false,
    isActiveModal: false,
}

function MainPageReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            state.products = action.products;
            return state;

        case GET_RECOMMENDED_PRODUCTS:
            state.recommended_products = action.products;
            return state;

        case SET_IS_ACTIVE_MODAL:
            state.isActiveModal = action.bool;
            return state;

        case SHOW_LOADER:
            state.loading = true;
            return state;

        case HIDE_LOADER:
            state.loading = false;
            return state;

        default:
            return state;
    }
}

export const setProducts = (payload) =>({type:GET_PRODUCTS, products: payload});
export const setRecommendedProducts = (payload) =>({type:GET_RECOMMENDED_PRODUCTS, products: payload});
export const setIsActiveModal = (bool) =>({type:SET_IS_ACTIVE_MODAL, bool: bool});

export const getProducts = () =>{
    return async (dispatch) =>{
        dispatch({ type: SHOW_LOADER });
        $host.get('/v1/product/list?per_page=15').then(function (response){
            dispatch({ type: HIDE_LOADER });
            dispatch(setProducts(response.data.products));
        }).catch(error => {console.log(error);});
    }
};

export const getRecommendedProducts = () =>{
    return async (dispatch) =>{
        // dispatch({ type: SHOW_LOADER });
        $host.get('/v1/product/recommended').then(function (response){
            // dispatch({ type: HIDE_LOADER });
            dispatch(setRecommendedProducts(response.data.products));
        }).catch(error => {console.log(error);});
    }
};

export default MainPageReducer;