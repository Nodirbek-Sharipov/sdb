import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./store/contextStore";
import store from "./store/store";

const reRenderDom = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <React.StrictMode>
                    <App/>
                </React.StrictMode>
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

reRenderDom(store.getState())
store.subscribe(() =>{
        reRenderDom()
    }
)

