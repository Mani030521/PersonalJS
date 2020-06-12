import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from "./containers/Login"
import Signup from "./containers/signup"

class App extends Component {
	render() {
		return (
			
				<BrowserRouter>
					<div className="App">
						<Switch>
							<Route exact path="/" component={Login} />
							<Route path="/register" component={Signup} />
							<Route path="/home" />
						</Switch>
					</div>
				</BrowserRouter>
		)
	}
}

export default App
