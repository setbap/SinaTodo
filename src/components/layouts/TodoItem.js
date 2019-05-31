import React, { useContext } from "react";
import Context from "../../context/Context";
import { Button } from "reactstrap";
const TodoItem = () => {
	const context = useContext(Context);

	const item = context.state.todo.map((item) => (
		<div
			key={item.id}
			className="my-2 rounded mx-1 bg-light px-0 py-3 mx-0"
		>
			<div className="row justify-content-around px-2 py-0 mx-0">
				<div className="col-10 text-left h4 px-0">{item.title}</div>

				<button
					type="button"
					class="col-2 p-0 btn-sm btn btn-outline-danger"
					onClick={() => context.deleteTodo(item.id)}
				>
					X
				</button>
			</div>
			<div className="row text-muted px-2 py-0 mx-0">{item.desc}</div>

			<Button
				block
				className="text-center mt-3 mb-2 col-8 mx-auto "
				onClick={() => context.doneTodo(item.id)}
			>
				done
			</Button>
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

	return <div>{context.state.todo.length ? item : noItemFound}</div>;
};

export default TodoItem;
