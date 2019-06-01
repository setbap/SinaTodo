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
	const [note, setNote] = useState("");

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
								background: "#E1E0E0",
								border: 0,
								color: "grey",
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
								background: "#fffbc3",
								border: 0,
								color: "grey",
							}}
						>
							Note
						</Button>
					</Link>
				</Col>
			</Row>
			<Form>
				<FormGroup className="my-3" row>
					<Label for="nid" xs={2}>
						note
					</Label>
					<Col xx={10}>
						<Input
							type="textarea"
							name="note"
							id="nid"
							value={note}
							onChange={(e) => setNote(e.target.value)}
							placeholder="keep your note"
						/>
					</Col>
				</FormGroup>

				<Button
					className="tp fab rounded-circle bg-yellow shadow-sm"
					style={{ background: "#fffbc3", border: 0, color: "grey" }}
					onClick={(e) => {
						e.preventDefault();
						context.addNote({ note });
						setNote("");
						props.history.push(`/note`);
					}}
				>
					save
				</Button>
			</Form>
		</Container>
	);
};

export default AddTodo;
