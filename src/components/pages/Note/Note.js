import React from "react";
import NoteItem from "./NoteItem";
import { Link } from "react-router-dom";
import { Col, Row, Button, Container } from "reactstrap";
const Done = () => {
	return (
		<Container>
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
								background: "#F97cc3",
								border: 0,
								color: "white",
							}}
						>
							Note
						</Button>
					</Link>
				</Col>
			</Row>
			<Button
				className="tp fab rounded-circle bg-yellow shadow-sm"
				style={{ background: "#F97cc3", border: 0, color: "grey" }}
			>
				<Link to="/addNote">NEW</Link>
			</Button>
			<NoteItem />
		</Container>
	);
};

export default Done;
