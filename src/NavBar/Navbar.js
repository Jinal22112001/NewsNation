import React from "react";
import "./Navbar.css";
import menu from "./menu.png";
import logo from "./logo.png";

const Navbar = ({ setTrigger }) => {
	return (
		<div className="Nav_Container">
			<img
				onClick={() => setTrigger(true)}
				className="logo"
				src={logo}
				alt="NewsNation"
			/>
		</div>
	);
};

export default Navbar;
