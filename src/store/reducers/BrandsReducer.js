import {$authHost, $host} from "../../http";
const GET_BRANDS = 'GET_BRANDS';

let defaultState = {
    brands:[],
    loading:false
};

function BrandsReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_BRANDS:
            state.brands = action.brands;
            return state;
        default:
            return state;
    }
}

export const setBrands = (payload) =>({type:GET_BRANDS, brands: payload})

export const getBrands = () =>{
    return async (dispatch) =>{
        $host.get('/v1/brand/list').then(function (response){
            dispatch(setBrands(response.data.brands))
        }).catch(error => {console.log(error);});
    }
}

export default BrandsReducer;