import {$authHost, $host} from "../../http";
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
const SHOW_LOADER = "SHOW_LOADER";
const HIDE_LOADER = "HIDE_LOADER";
// const SET_PAGINATION = 'SET_PAGINATION';
// const SET_RECOMMENDED_PRODUCTS = 'SET_RECOMMENDED_PRODUCTS';

let defaultState = {
    products:[],
    pagination:{
        "total": 3,
        "current": 1,
        "per_page": 12,
        "total_pages": 1,
        "next": 2,
        "previous": null
    },
    loading: false,
};

function AllProductsReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            state.products = action.payload.products;
            state.pagination = action.payload.pagination;
            return state;

        // case SET_RECOMMENDED_PRODUCTS:
        //     state.products = action.payload;

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


export const setAllProducts = (payload) =>({type:GET_ALL_PRODUCTS, payload: payload});
// export const setCategoryRecommendedProducts = (payload) => ({type: SET_RECOMMENDED_PRODUCTS, payload: payload});

export const getAllProducts = (slug, page, brand_ids) =>{
    console.log(`/v1/product/list?type=${slug}${page ? page : '&page=1'}${brand_ids ? brand_ids : '&brand_ids=0'}&per_page=16`, page, slug, brand_ids);
    return async (dispatch) =>{
        dispatch({ type: SHOW_LOADER });
        $host.get(`/v1/product/list?type=${slug}${page ? page : '&page=1'}${brand_ids ? brand_ids.substring(1) : '&brand_ids=0'}&per_page=16`).then(function (response){
            dispatch(setAllProducts(response.data));
            console.log(response.data)
            dispatch({ type: HIDE_LOADER });
        }).catch(error => {console.log(error);});
    }
};

// export const getCategoryRecommendedProducts = (search) =>{
//     return async (dispatch) =>{
//         dispatch({ type: SHOW_LOADER });
//         $host.get(`/v1/product/recommended/${search ? search : '?page=1'}`).then(function (response){
//             dispatch({ type: HIDE_LOADER });
//             dispatch(setCategoryRecommendedProducts(response.data.products));
//         }).catch(error => {console.log(error);});
//     }
// };

export default AllProductsReducer;