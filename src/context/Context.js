import React from "react";

export default React.createContext({
	state: {
		todo: [],
		done: [],
		note: [],
	},
	addTodo: (todo) => {},
	deleteTodo: (todoId) => {},
	doneTodo: (todoId) => {},
	deleteDone: (doneId) => {},
	addNote: (note) => {},
	deleteNote: (noteId) => {},
	initApp: () => {},
});
