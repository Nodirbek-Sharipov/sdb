import {$host} from "../../http";
const GET_PAGE = 'GET_PAGE';
const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';

const defaultState = {
    page:{},
    loading: false
};

function PageReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_PAGE:
            state.page = action.payload;
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


export const setPage = (payload) =>({type:GET_PAGE, payload: payload});

export const getPage = (slug) =>{
    return async (dispatch) =>{
        dispatch({ type: SHOW_LOADER });
        $host.get(`/v1/page/${slug}`).then(function (response){
            dispatch(setPage(response.data.page));
            dispatch({ type: HIDE_LOADER })
        }).catch(error => {console.log(error);});
    }
};

export default PageReducer;