import {combineReducers, createStore} from "redux";
import MainPageReducer from "./reducers/MainPageReducer";
import NavbarReducer from "./reducers/NavbarReducer";
import FilterReducer from "./reducers/FilterReducer";

const reducers = combineReducers({
    mainPageReducer: MainPageReducer,
    navbarLinks: NavbarReducer,
    filterItems: FilterReducer
});

const store = createStore(reducers);

export default store;