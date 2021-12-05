import {$authHost} from "../../http";
const GET_CATEGORY_PRODUCTS = 'GET_CATEGORY_PRODUCTS';

let defaultState = {
    products:[],
    subCats: [],
}

function FilterReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_CATEGORY_PRODUCTS:
            state.products = action.payload.products;
            state.subCats = action.payload.subCats;
            return state;

        default:
            return state;
    }
}


export const setCategoryProducts = (payload) =>({type:GET_CATEGORY_PRODUCTS, payload: payload})

export const getCategoryProducts = (slug) =>{
    return async (dispatch) =>{
        $authHost.get(`/v1/category/${slug}`).then(function (response){
            console.log(response.data)
            dispatch(setCategoryProducts(response.data))
        }).catch(error => {console.log(error);});
    }
}

export default FilterReducer;