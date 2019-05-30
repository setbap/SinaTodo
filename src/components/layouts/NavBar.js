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
				<NavbarBrand tag={Link} to="/" className="mr-auto">
					Sina Todo
				</NavbarBrand>
				<NavbarToggler
					onClick={() => setToggle(!toggle)}
					className="mr-2 bg-white"
				/>
				<Collapse isOpen={!toggle} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink tag={Link} to="/about">
								ABOUT
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://github.com/reactstrap/reactstrap">
								GitHub
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};
export default NavBar;
