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
} from "reactstrap";

const AddTodo = () => {
	const context = useContext(Context);
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");

	return (
		<Container>
			<Form>
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
					style={{ background: "#fffbc3", border: 0, color: "grey" }}
					onClick={(e) => {
						e.preventDefault();
						context.addTodo({ title, desc });
						setDesc("");
						setTitle("");
					}}
				>
					save
				</Button>
			</Form>
		</Container>
	);
};

export default AddTodo;
