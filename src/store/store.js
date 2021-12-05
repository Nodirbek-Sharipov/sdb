import {applyMiddleware, combineReducers, createStore} from "redux";
import MainPageReducer from "./reducers/MainPageReducer";
import NavbarReducer from "./reducers/NavbarReducer";
import FilterReducer from "./reducers/FilterReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducers = combineReducers({
    mainPageReducer: MainPageReducer,
    navbarLinks: NavbarReducer,
    filterReducer: FilterReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;