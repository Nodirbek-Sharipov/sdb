import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom"
import {publicRoutes} from "./routes"
import ScrollToTop from "../ScrollToTop"

function AppRouter(props) {
	return (
		<div className="pages">
			<ScrollToTop/>
			<Switch>
				{
					publicRoutes.map((item) => {
						return (
							<Route key={item.path}  path={item.path} component={item.component} exact/>
						)
					})
				}
				<Redirect to="/404"/>
			</Switch>
		</div>
	)
}

export default AppRouter