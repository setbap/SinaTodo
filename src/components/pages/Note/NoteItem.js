import React, { useContext } from "react";
import Context from "../../../context/Context";
import { Button } from "reactstrap";
const NoteItem = () => {
	const context = useContext(Context);

	const item = context.state.note.map((item) => (
		<div
			key={item.id}
			className="my-2 rounded mx-1 bg-light px-0 py-3 mx-0"
		>
			<div className="row justify-content-around px-2 py-0 mx-0">
				<div className="col-10 text-left h6 px-0">{item.note}</div>

				<button
					type="button"
					className="col-2 p-0 btn-sm btn btn-outline-danger"
					onClick={() => context.deleteNote(item.id)}
				>
					X
				</button>
			</div>
		</div>
	));

	const noItemFound = (
		<div className="jumbotron my-4">
			<h1 className="display-4">Hello, world!</h1>
			<p className="lead">to add item press fab button</p>
			<hr className="my-4" />

			<p className="lead">
				<a
					className="btn btn-primary btn-lg"
					href="github.com"
					role="button"
				>
					good luck
				</a>
			</p>
		</div>
	);

	return <div>{context.state.note.length ? item : noItemFound}</div>;
};

export default NoteItem;
