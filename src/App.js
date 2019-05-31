import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import AddTodo from "./components/pages/Todo/AddTodo";
import Home from "./components/pages/Home/Home";
import Done from "./components/pages/Done/Done";
import Fab from "./components/layouts/Fab";
import { Col, Row } from "reactstrap";
import GlobST from "./context/GlobST";

function App() {
	return (
		<GlobST>
			<Router>
				<NavBar />
				<Route component={Home} exact path="/" />
				<Route component={Done} exact path="/done" />
				<Route component={AddTodo} exact path="/addTodo" />
			</Router>
		</GlobST>
	);
}

export default App;
