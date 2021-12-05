import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./store/contextStore";
import store from "./store/store";
import {Provider} from "react-redux";

const reRenderDom = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

reRenderDom(store.getState())
store.subscribe(() =>{
        reRenderDom()
    }
)

