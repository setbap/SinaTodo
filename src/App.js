import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<header className="App-header">
					<p>Sina will return :) </p>
				</header>
			</div>
		</Router>
	);
}

export default App;
