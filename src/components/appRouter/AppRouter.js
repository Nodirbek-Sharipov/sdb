import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {publicRoutes} from "./routes";

function AppRouter(props) {
    return (
        <div className="pages">
            <Switch>
                {
                    publicRoutes.map((item) => {
                        return (
                            <Route key={item.path}  path={item.path} component={item.component} exact/>
                        )
                    })
                }
                <Redirect to="/"/>
            </Switch>
        </div>
    );
}

export default AppRouter;