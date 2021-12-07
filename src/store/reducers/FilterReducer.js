import {$authHost} from "../../http";
const GET_CATEGORY_PRODUCTS = 'GET_CATEGORY_PRODUCTS';
const SHOW_LOADER = "SHOW_LOADER"
const HIDE_LOADER = "HIDE_LOADER"

let defaultState = {
    products:[],
    subCats: [],
    loading: false,
}

function FilterReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_CATEGORY_PRODUCTS:
            state.products = action.payload.products;
            state.subCats = action.payload.subCats;
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


export const setCategoryProducts = (payload) =>({type:GET_CATEGORY_PRODUCTS, payload: payload})

export const getCategoryProducts = (slug) =>{
    return async (dispatch) =>{
        dispatch({ type: SHOW_LOADER })

        $authHost.get(`/v1/category/${slug}`).then(function (response){
            dispatch(setCategoryProducts(response.data))
            dispatch({ type: HIDE_LOADER })
        }).catch(error => {console.log(error);});
    }
}

export default FilterReducer;