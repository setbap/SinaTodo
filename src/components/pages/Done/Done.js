import React from "react";
import DoneItem from "./DoneItem";
import Fab from "../../layouts/Fab";
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
				<Col xs="6" className="mt-2">
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
							Not Done
						</Button>
					</Link>
				</Col>
				<Col xs="6" className="mt-2">
					<Link to="/done">
						<Button
							block
							className="rounded shadow-sm py-2"
							style={{
								background: "#F97cc3",

								border: 0,
								color: "white",
							}}
						>
							Done
						</Button>
					</Link>
				</Col>
			</Row>
			<Fab />
			<DoneItem />
		</Container>
	);
};

export default Done;
