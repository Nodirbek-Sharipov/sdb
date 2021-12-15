import React from "react"
import {$host} from "../../http"
const CHANGE_NAVBAR_ACTIVE = 'CHANGE_NAVBAR_ACTIVE'
const GET_CATEGORIES = 'GET_CATEGORIES'
const GET_SEARCHED_PRODUCTS = 'GET_SEARCHED_PRODUCTS' 

let initialState = {
	navbarActive: false,
	navbarLinks: [],
	searchedProducts: [],
	loading:false
}

const NavbarReducer = (state = initialState, action) =>{
	switch (action.type) {
		case CHANGE_NAVBAR_ACTIVE:
			state.navbarActive = action.bool
			return state

		case GET_CATEGORIES:
			state.navbarLinks = action.categories
			return state
            
		case GET_SEARCHED_PRODUCTS:
			state.searchedProducts = action.products
			return state

		default:
			return state
	}
}

export const changeNavbarActiveAC = (bool) =>({type:CHANGE_NAVBAR_ACTIVE, bool: bool})
export const setCategories = (payload) =>({type: GET_CATEGORIES, categories: payload})
export const setSearchedProducts = (payload) =>({type: GET_SEARCHED_PRODUCTS, products: payload})

export const getCategories = () =>{
	return async (dispatch) =>{
		$host.get('/v1/category/list').then(function (response) {
			dispatch(setCategories(response.data.categories))
		}).catch(function (error) {
			console.error(error)
		})
	}
}

export const getSearchedProducts = (query) => {
	return async (dispatch) =>{
		$host.get(`/v1/product/list?type=default&search=${query}`).then(function(response){
			dispatch(setSearchedProducts(response.data.products))
		}).catch(function (error) {
			console.error(error)
		})
	}
}


export default NavbarReducer