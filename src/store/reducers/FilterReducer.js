import {$authHost, $host} from "../../http"
const GET_CATEGORY_PRODUCTS = 'GET_CATEGORY_PRODUCTS'
const SHOW_LOADER = "SHOW_LOADER"
const HIDE_LOADER = "HIDE_LOADER"
// const SET_PAGINATION = 'SET_PAGINATION';
// const SET_RECOMMENDED_PRODUCTS = 'SET_RECOMMENDED_PRODUCTS';

let defaultState = {
	products:[],
	subCats: [],
	pagination:{
		"total": 3,
		"current": 1,
		"per_page": 12,
		"total_pages": 1,
		"next": 2,
		"previous": null
	},
	loading: false,
}

function FilterReducer(state = defaultState, action) {
	switch (action.type) {
		case GET_CATEGORY_PRODUCTS:
			state.products = action.payload.products
			state.subCats = action.payload.subCats
			state.pagination = action.payload.pagination
			return state

			// case SET_RECOMMENDED_PRODUCTS:
			//     state.products = action.payload;

		case SHOW_LOADER:
			state.loading = true
			return state

		case HIDE_LOADER:
			state.loading = false
			return state

		default:
			return state
	}
}


export const setCategoryProducts = (payload) =>({type:GET_CATEGORY_PRODUCTS, payload: payload})
// export const setCategoryRecommendedProducts = (payload) => ({type: SET_RECOMMENDED_PRODUCTS, payload: payload});

export const getCategoryProducts = (slug, search) =>{
	return async (dispatch) =>{
		dispatch({ type: SHOW_LOADER })
		$host.get(`/v1/category/${slug}${search ? search : '?page=1'}&per_page=16`).then(function (response){
			dispatch(setCategoryProducts(response.data))
			dispatch({ type: HIDE_LOADER })
		}).catch(error => {console.log(error)})
	}
}

// export const getCategoryRecommendedProducts = (search) =>{
//     return async (dispatch) =>{
//         dispatch({ type: SHOW_LOADER });
//         $host.get(`/v1/product/recommended/${search ? search : '?page=1'}`).then(function (response){
//             dispatch({ type: HIDE_LOADER });
//             dispatch(setCategoryRecommendedProducts(response.data.products));
//         }).catch(error => {console.log(error);});
//     }
// };

export default FilterReducer