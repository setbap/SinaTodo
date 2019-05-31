import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
const Fab = () => {
	return (
		<Button
			className="tp fab rounded-circle bg-yellow shadow-sm"
			style={{ background: "#fffbc3", border: 0, color: "grey" }}
		>
			<Link to="/addTodo">x</Link>
		</Button>
	);
};

export default Fab;
