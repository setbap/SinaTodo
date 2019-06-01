import React, { useContext } from "react";
import Context from "../../../context/Context";
const TodoItem = () => {
	const context = useContext(Context);

	const item = context.state.done.map((item) => (
		<div
			key={item.id}
			className="my-2 rounded mx-1 bg-light px-0 py-3 mx-0"
		>
			<div className="row justify-content-around px-2 py-0 mx-0">
				<div className="col-10 text-left h4 px-0">{item.title}</div>

				<button
					type="button"
					className="col-2 p-0 btn-sm btn btn-outline-danger"
					onClick={() => context.deleteDone(item.id)}
				>
					X
				</button>
			</div>
			<div className="row text-muted px-2 py-0 mx-0">{item.desc}</div>
		</div>
	));

	const noItemFound = (
		<div className="jumbotron my-4">
			<h1 className="display-4">Hi my friend</h1>
			<p className="lead">
				You do not have any work done. <br />
				lets start new work
				<br />
				have fun{" "}
			</p>
		</div>
	);

	return <div>{context.state.done.length ? item : noItemFound}</div>;
};

export default TodoItem;
