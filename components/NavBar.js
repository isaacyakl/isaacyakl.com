import PropTypes from "prop-types";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Branding from "../components/Branding";
import EmailLink from "./EmailLink";

const NavBar = ({ active }) => {
	const [isNavMenuOpen, setNavMenuState] = useState(true); // Nav menu starts open

	return (
		<nav className="no-select">
			<div id="top" className="nav-dash">
				<Branding />
				<div className="hamburger" onClick={() => setNavMenuState(!isNavMenuOpen)} role="menu">
					<FontAwesomeIcon icon={faBars} />
				</div>
			</div>
			<ul className={`nav-menu${isNavMenuOpen ? " hidden" : ""}`}>
				<Link href="/">
					<a>
						<li className={`nav-menu-item${active === "home" ? " active" : ""}`}>Home</li>
					</a>
				</Link>
				<Link href="/work">
					<a>
						<li className={`nav-menu-item${active === "work" ? " active" : ""}`}>Work</li>
					</a>
				</Link>
				<EmailLink>
					<li className={`nav-menu-item${active === "contact" ? " active" : ""}`}>Contact</li>
				</EmailLink>
				<Link href="/more">
					<a>
						<li className={`nav-menu-item${active === "more" ? " active" : ""}`}>More</li>
					</a>
				</Link>
			</ul>
		</nav>
	);
};

NavBar.defaultProps = {
	active: "home",
};

NavBar.propTypes = {
	active: PropTypes.string,
};

export default NavBar;
