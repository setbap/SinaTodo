import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
const NavBar = (props) => {
	const [toggle, setToggle] = useState(true);

	return (
		<div>
			<Navbar className="bg-yellow " color="faded" light>
				<NavbarBrand
					tag={Link}
					to="/"
					className=" font-weight-bold mr-auto"
				>
					My Todo
				</NavbarBrand>
				<NavbarToggler
					onClick={() => setToggle(!toggle)}
					className="mr-2 bg-white"
				/>
				<Collapse isOpen={!toggle} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink
								className="text-center"
								onClick={() => setToggle(!toggle)}
								tag={Link}
								to="/about"
							>
								ABOUT
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className="text-center"
								onClick={() => setToggle(!toggle)}
								href="https://github.com/setbap/Sinatodo"
							>
								Source Code (github)
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};
export default NavBar;
