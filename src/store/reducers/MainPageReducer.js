import {$authHost, $host} from "../../http";
const GET_PRODUCTS = 'GET_PRODUCTS';

let defaultState = {
    products:[],
    loading:false
}

function MainPageReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            state.products = action.products;
            return state;
        default:
            return state;
    }
}

export const setProducts = (payload) =>({type:GET_PRODUCTS, products: payload})

export const getProducts = () =>{
    return async (dispatch) =>{
        $authHost.get('/v1/product/list').then(function (response){
            dispatch(setProducts(response.data.products))
        }).catch(error => {console.log(error);});
    }
}

export default MainPageReducer;