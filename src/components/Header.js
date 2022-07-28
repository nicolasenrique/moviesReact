import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className= "navbar-nav mr-auto">
					<li className = "nav-item">
						<Link to="/" className = "nav-link">Home</Link>
					</li>
					<li className = "nav-item">
						<Link to="/list" className = "nav-link">List</Link>
					</li>
					<li className = "nav-item">
						<Link to="/contact" className = "nav-link">Contact</Link>
					</li>
				</ul>
			</div>
			</nav>
		</header>
	);
};

export default Header;