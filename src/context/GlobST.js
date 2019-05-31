import React, { useReducer } from "react";

import AppCtx from "./Context";
import Reducer from "./Reducer";
import * as type from "./types";

const GlobalState = (props) => {
	let todo = [];
	let note = [];
	let done = [];
	if (localStorage.getItem("sinaTodo") !== null) {
		todo = JSON.parse(localStorage.getItem("sinaTodo"));
	} else {
		localStorage.setItem("sinaTodo", JSON.stringify([]));
	}

	if (localStorage.getItem("sinaDone") !== null) {
		done = JSON.parse(localStorage.getItem("sinaDone"));
	} else {
		localStorage.setItem("sinaDone", JSON.stringify([]));
	}

	if (localStorage.getItem("sinaNote") !== null) {
		note = JSON.parse(localStorage.getItem("sinaNote"));
	} else {
		localStorage.setItem("sinaNote", JSON.stringify([]));
	}

	const [appState, dispatch] = useReducer(Reducer, {
		todo: todo,
		done: done,
		note: note,
	});

	const addTodo = (todo) => {
		setTimeout(() => {
			dispatch({ type: type.ADD_TODO, todo });
		}, 100);
	};

	const deleteTodo = (id) => {
		setTimeout(() => {
			dispatch({ type: type.REMOVE_TODO, id });
		}, 100);
	};

	const doneTodo = (id) => {
		setTimeout(() => {
			dispatch({ type: type.ADD_DONE, id });
		}, 100);
	};

	const deleteDone = (id) => {
		setTimeout(() => {
			dispatch({ type: type.REMOVE_DONE, id });
		}, 100);
	};

	const addNote = (note) => {
		setTimeout(() => {
			dispatch({ type: type.ADD_NOTE, note });
		}, 100);
	};

	const deleteNote = (id) => {
		setTimeout(() => {
			dispatch({ type: type.REMOVE_NOTE, id });
		}, 100);
	};

	const initApp = () => {
		setTimeout(() => {
			dispatch({ type: type.INIT_APP });
		}, 100);
	};

	return (
		<AppCtx.Provider
			value={{
				state: appState,
				addTodo,
				deleteTodo,
				doneTodo,
				deleteDone,
				addNote,
				deleteNote,
				initApp,
			}}
		>
			{props.children}
		</AppCtx.Provider>
	);
};

export default GlobalState;
