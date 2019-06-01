import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
const Fab = () => {
	return (
		<Button
			className="tp fab rounded-circle bg-yellow shadow-sm"
			style={{ background: "#F97cc3", border: 0, color: "grey" }}
		>
			<Link to="/addTodo">NEW</Link>
		</Button>
	);
};

export default Fab;
