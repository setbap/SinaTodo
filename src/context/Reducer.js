import * as type from "./types";

const addTodo = (todo, state) => {
	// let Todo = localStorage.getItem('SinaTodo');
	// todo = JSON.parse(Todo);
	const updatedTodo = [...state.todo];
	updatedTodo.push({ ...todo, id: Date.now() });
	const TodoString = JSON.stringify(updatedTodo);
	localStorage.setItem("sinaTodo", TodoString);
	return { ...state, todo: updatedTodo };
};

const removeTodo = (id, state) => {
	console.log("Removing product with id: " + id);
	const updatedTodo = [...state.todo];
	const updatedItemIndex = updatedTodo.findIndex((item) => item.id === id);
	updatedTodo.splice(updatedItemIndex, 1);
	const TodoString = JSON.stringify(updatedTodo);
	localStorage.setItem("sinaTodo", TodoString);
	return { ...state, todo: updatedTodo };
};

const doneTodo = (id, state) => {
	console.log("done todo : " + id);
	const updatedTodo = [...state.todo];
	const updatedDone = [...state.done];
	const updatedItemIndex = updatedTodo.findIndex((item) => item.id === id);
	const doneTodo = updatedTodo[updatedItemIndex];
	updatedDone.push(doneTodo);
	updatedTodo.splice(updatedItemIndex, 1);
	const TodoString = JSON.stringify(updatedTodo);
	const DoneString = JSON.stringify(updatedDone);
	localStorage.setItem("sinaTodo", TodoString);
	localStorage.setItem("sinaDone", DoneString);
	return { ...state, todo: updatedTodo, done: updatedDone };
};

const removeDone = (id, state) => {
	console.log("Removing done with id: " + id);
	const updatedDone = [...state.done];
	const updatedItemIndex = updatedDone.findIndex((item) => item.id === id);
	updatedDone.splice(updatedItemIndex, 1);
	const DoneString = JSON.stringify(updatedDone);
	localStorage.setItem("sinaDone", DoneString);
	return { ...state, done: updatedDone };
};

const addNote = (note, state) => {
	// let Todo = localStorage.getItem('SinaTodo');
	// todo = JSON.parse(Todo);
	const updatedNote = [...state.note];
	updatedNote.push({ ...note, id: Date.now() });
	const NoteString = JSON.stringify(updatedNote);
	localStorage.setItem("sinaNote", NoteString);
	return { ...state, note: updatedNote };
};

const removeNote = (id, state) => {
	console.log("Removing note with id: " + id);
	const updatedNote = [...state.note];
	const updatedItemIndex = updatedNote.findIndex((item) => item.id === id);
	updatedNote.splice(updatedItemIndex, 1);
	const NoteString = JSON.stringify(updatedNote);
	localStorage.setItem("sinaNote", NoteString);
	return { ...state, note: updatedNote };
};

const initState = (state) => {
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

	return { ...state, note, todo, done };
};

const Reducer = (state, action) => {
	switch (action.type) {
		case type.ADD_TODO:
			return addTodo(action.todo, state);
		case type.REMOVE_TODO:
			return removeTodo(action.id, state);
		case type.ADD_DONE:
			return doneTodo(action.id, state);
		case type.REMOVE_DONE:
			return removeDone(action.id, state);
		case type.ADD_NOTE:
			return addNote(action.note, state);
		case type.REMOVE_NOTE:
			return removeNote(action.id, state);
		case type.INIT_APP:
			return initState(state);
		default:
			return state;
	}
};

export default Reducer;

/*

{
    title : todoName , 
    desc  : todoDesc , 
    todoId: date.now 
}

{
    title : doneName , 
    desc  : doneDesc , 
    doneId: date.now 
}

{
    title : noteName , 
    doneId: date.now 
}





*/
