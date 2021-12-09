import {applyMiddleware, combineReducers, createStore} from "redux";
import MainPageReducer from "./reducers/MainPageReducer";
import NavbarReducer from "./reducers/NavbarReducer";
import FilterReducer from "./reducers/FilterReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import BrandsReducer from "./reducers/BrandsReducer";
import CartReducer from "./reducers/CartReducer";
import ProductReducer from "./reducers/ProductReducer";
import UserReducer from "./reducers/UserReducer";

const reducers = combineReducers({
    mainPageReducer: MainPageReducer,
    navbarLinks: NavbarReducer,
    filterReducer: FilterReducer,
    brands: BrandsReducer,
    cart:CartReducer,
    product: ProductReducer,
    user: UserReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;