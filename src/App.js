import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import AddTodo from "./components/pages/Todo/AddTodo";
import Note from "./components/pages/Note/Note";
import Todo from "./components/pages/Todo/Todo";
import Done from "./components/pages/Done/Done";
import About from "./components/pages/About/About";
import AddNote from "./components/pages/Note/AddNote";
import GlobST from "./context/GlobST";

function App() {
	return (
		<GlobST>
			<Router>
				<NavBar />
				<Switch>
					<Route component={Todo} exact path="/" />
					<Route component={Done} exact path="/done" />
					<Route component={Note} exact path="/note" />
					<Route component={AddTodo} exact path="/addTodo" />
					<Route component={AddNote} exact path="/addNote" />
					<Route component={About} exact path="/about" />
				</Switch>
			</Router>
		</GlobST>
	);
}

export default App;
