import {$authHost} from "../../http";
const GET_USER = 'GET_USER';
const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';

const defaultState = {
    user:{},
    orders:[],
    loading: false
}

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


export const setUser = (user, orders) =>({type:GET_USER, payload: {user: user, orders:orders}})

export const getUser = () =>{
    return async (dispatch) =>{
        dispatch({ type: SHOW_LOADER });
        $authHost.get(`/v1/user/profile`).then(function (response){
            console.log(response.data);
            dispatch(setUser(response.data.user, response.data.orders));
            dispatch({ type: HIDE_LOADER })
        }).catch(error => {console.log(error);});
    }
};

export default UserReducer;