import React from "react";
import {$host} from "../../http";
const CHANGE_NAVBAR_ACTIVE = 'CHANGE_NAVBAR_ACTIVE';
const GET_CATEGORIES = 'GET_CATEGORIES';

let initialState = {
    navbarActive: false,
    navbarLinks: [],
};

const NavbarReducer = (state = initialState, action) =>{
    switch (action.type) {
        case CHANGE_NAVBAR_ACTIVE:
            state.navbarActive = !state.navbarActive;
            return state;

        case GET_CATEGORIES:
            state.navbarLinks = action.categories;
            return state;

        default:
            return state;
    }
}

export const changeNavbarActiveAC = () =>({type:CHANGE_NAVBAR_ACTIVE});
export const setCategories = (payload) =>({type: GET_CATEGORIES, categories: payload})

export const getCategories = () =>{
    return async (dispatch) =>{
        $host.get('/v1/category/list').then(function (response) {
            dispatch(setCategories(response.data.categories));
        }).catch(function (error) {
            console.error(error);
        });
    }
}


export default NavbarReducer;