import {combineReducers, createStore} from "redux";
import MainPageReducer from "./reducers/MainPageReducer";

const reducers = combineReducers({
    mainPageReducer: MainPageReducer
});

const store = createStore(reducers);

export default store;