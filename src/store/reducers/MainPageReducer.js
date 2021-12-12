import {$authHost, $host} from "../../http";
const GET_PRODUCTS = 'GET_PRODUCTS';
const GET_RECOMMENDED_PRODUCTS = 'GET_RECOMMENDED_PRODUCTS';
const GET_POPULAR_PRODUCTS = 'GET_POPULAR_PRODUCTS';
const GET_NEW_PRODUCTS = 'GET_NEW_PRODUCTS';
const GET_DISCOUNTED_PRODUCTS = 'GET_DISCOUNTED_PRODUCTS';
const SET_IS_ACTIVE_MODAL = 'SET_IS_ACTIVE_MODAL';
const SHOW_LOADER = "SHOW_LOADER";
const HIDE_LOADER = "HIDE_LOADER";
const GET_BANNER = "GET_BANNER";

let defaultState = {
    products:[],
    recommended_products: [],
    new_products:[],
    popular_products:[],
    discounted_products:[],
    banner:[],
    loading:false,
    isActiveModal: false,
};

function MainPageReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            state.products = action.products;
            return state;

        case GET_RECOMMENDED_PRODUCTS:
            state.recommended_products = action.products;
            return state;

        case GET_POPULAR_PRODUCTS:
            state.new_products = action.products;
            return state;

        case GET_NEW_PRODUCTS:
            state.popular_products = action.products;
            return state;

        case GET_DISCOUNTED_PRODUCTS:
            state.discounted_products = action.products;
            return state;

        case SET_IS_ACTIVE_MODAL:
            state.isActiveModal = action.bool;
            return state;

        case GET_BANNER:
            state.banner = action.banner;
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

export const setProducts            = (payload) =>  ({type:GET_PRODUCTS, products: payload});
export const setRecommendedProducts = (payload) =>  ({type:GET_RECOMMENDED_PRODUCTS, products: payload});
export const setPopularProducts     = (payload) =>  ({type:GET_POPULAR_PRODUCTS, products: payload});
export const setNewProducts         = (payload) =>  ({type:GET_NEW_PRODUCTS, products: payload});
export const setDiscountedProducts  = (payload) =>  ({type:GET_DISCOUNTED_PRODUCTS, products: payload});
export const setIsActiveModal       = (bool)    =>  ({type:SET_IS_ACTIVE_MODAL, bool: bool});
export const setBanner              = (payload) =>  ({type:GET_BANNER, banner: payload});


export const getProducts = () =>{
    return async (dispatch) =>{
        dispatch({ type: SHOW_LOADER });
        $host.get('/v1/product/list?type=default').then(function (response){
            dispatch({ type: HIDE_LOADER });
            dispatch(setProducts(response.data.products));
        }).catch(error => {console.log(error);});
    }
};

export const getRecommendedProducts = () =>{
    return async (dispatch) =>{
        dispatch({ type: SHOW_LOADER });
        $host.get('/v1/product/list?type=recommended').then(function (response){
            dispatch({ type: HIDE_LOADER });
            dispatch(setRecommendedProducts(response.data.products));
        }).catch(error => {console.log(error);});
    }
};

export const getPopularProducts = () =>{
    return async (dispatch) =>{
        dispatch({ type: SHOW_LOADER });
        $host.get('/v1/product/list?type=popular').then(function (response){
            dispatch({ type: HIDE_LOADER });
            dispatch(setPopularProducts(response.data.products));
        }).catch(error => {console.log(error);});
    }
};

export const getNewProducts = () =>{
    return async (dispatch) =>{
        dispatch({ type: SHOW_LOADER });
        $host.get('/v1/product/list?type=new').then(function (response){
            dispatch({ type: HIDE_LOADER });
            dispatch(setNewProducts(response.data.products));
        }).catch(error => {console.log(error);});
    }
};

export const getDiscountedProducts = () =>{
    return async (dispatch) =>{
        dispatch({ type: SHOW_LOADER });
        $host.get('/v1/product/list?type=discounted').then(function (response){
            dispatch({ type: HIDE_LOADER });
            dispatch(setDiscountedProducts(response.data.products));
        }).catch(error => {console.log(error);});
    }
};

export const getBanner = () =>{
    return async (dispatch) =>{
        dispatch({ type: SHOW_LOADER });
        $host.get('/v1/events/list').then(function (response){
            dispatch({ type: HIDE_LOADER });
            dispatch(setBanner(response.data.events));
        }).catch(error => {console.log(error);});
    }
};

export default MainPageReducer;