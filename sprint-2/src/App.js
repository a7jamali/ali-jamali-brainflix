import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Master from "./components/Master";
import Uploader from "./components/Uploader";


export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Header />
					<Switch>
						<Redirect
							from="/"
							to="/play/1af0jruup5gu"
							exact
							component={Master}
						/>
						<Route path="/play/:Id" component={Master} />
						<Route path="/Uploader" component={Uploader} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
