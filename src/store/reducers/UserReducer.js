import {$authHost} from "../../http";
const GET_USER = 'GET_USER';
const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';

const defaultState = {
    user:{},
    orders:[],
    loading: false
};

function UserReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_USER:
            state.user = action.payload.user;
            state.orders = action.payload.orders;
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


export const setUser = (payload) =>({type:GET_USER, payload: {user: payload.user, orders: payload.orders}});

export const getUser = () =>{
    return async (dispatch) =>{
        dispatch({ type: SHOW_LOADER });
        $authHost.get(`/v1/user/profile`).then(function (response){
            let user = {
                user: response.data.user,
                orders: response.data.orders
            };
            localStorage.setItem('user', JSON.stringify(user));
            dispatch(setUser(JSON.parse(localStorage.getItem('user'))));
            dispatch({ type: HIDE_LOADER })
        }).catch(error => {console.log(error);});
    }
};

export default UserReducer;