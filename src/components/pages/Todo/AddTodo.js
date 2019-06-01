import React, { useContext, useState } from "react";
import Context from "../../../context/Context";

import {
	Col,
	Form,
	FormGroup,
	Label,
	Input,
	Container,
	Button,
	Row,
} from "reactstrap";
import { Link } from "react-router-dom";

const AddTodo = (props) => {
	const context = useContext(Context);
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		context.addTodo({ title, desc });
		setDesc("");
		setTitle("");
		props.history.push(`/`);
	};

	return (
		<Container>
			{" "}
			<Row className="mt-2">
				<Col xs="6" className="">
					<Link to="/">
						<Button
							block
							className="rounded shadow-sm py-2"
							style={{
								background: "#F97cc3",
								border: 0,
								color: "white",
							}}
						>
							Todo
						</Button>
					</Link>
				</Col>
				<Col xs="6" className="">
					<Link to="/note">
						<Button
							block
							className="rounded shadow-sm py-2"
							style={{
								background: "#E1E0E0",
								border: 0,
								color: "grey",
							}}
						>
							Note
						</Button>
					</Link>
				</Col>
			</Row>
			<Form onSubmit={handleSubmit}>
				<FormGroup className="my-3" row>
					<Label for="tid" xs={2}>
						Title
					</Label>
					<Col xx={10}>
						<Input
							type="text"
							name="title"
							id="tid"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							placeholder="enter your work title"
						/>
					</Col>
				</FormGroup>
				<FormGroup className="my-3" row>
					<Label for="did" xs={2}>
						Desc
					</Label>
					<Col xs={10}>
						<Input
							type="textarea"
							name="desc"
							id="did"
							value={desc}
							onChange={(e) => setDesc(e.target.value)}
							row="20"
							placeholder="enter your work desc"
						/>
					</Col>
				</FormGroup>
				<Button
					className="tp fab rounded-circle bg-yellow shadow-sm"
					style={{ background: "#F97cc3", border: 0, color: "white" }}
				>
					save
				</Button>
			</Form>
		</Container>
	);
};

export default AddTodo;
