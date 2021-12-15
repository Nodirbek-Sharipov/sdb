import { $host} from "../../http"
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const SHOW_LOADER = "SHOW_LOADER"
const HIDE_LOADER = "HIDE_LOADER"

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
}

function AllProductsReducer(state = defaultState, action) {
	switch (action.type) {
		case GET_ALL_PRODUCTS:
			state.products = action.payload.products
			state.pagination = action.payload.pagination
			return state

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


export const setAllProducts = (payload) =>({type:GET_ALL_PRODUCTS, payload: payload})

export const getAllProducts = (slug, page, brand_ids, per_page=16, search) =>{
	return async (dispatch) =>{
		dispatch({ type: SHOW_LOADER })
		$host.get(`/v1/product/list`, {
			params: {
				type: slug,
				page,
				brand_ids,
				per_page,
				search
			}
		}).then(function (response){
			dispatch(setAllProducts(response.data))
			console.log(response.data)
			dispatch({ type: HIDE_LOADER })
		}).catch(error => {console.log(error)})
	}
}

export default AllProductsReducer