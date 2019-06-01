import React, { useContext } from "react";
import Context from "../../../context/Context";
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
			<h1 className="display-4">Hi my friend</h1>
			<p className="lead">
				You do not have any note. :( <br />
				trust me say what you want. i save it in localStorage
				<br />
				have fun{" "}
			</p>
		</div>
	);

	return <div>{context.state.note.length ? item : noItemFound}</div>;
};

export default NoteItem;
