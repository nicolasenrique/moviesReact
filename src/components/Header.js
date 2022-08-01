import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Search from './Search';


const Header = () => {
	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link to="/" className="navbar-brand">Alkeflix</Link>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className= "navbar-nav mr-auto">
					<li className = "nav-item">
						<Link to="/" className = "nav-link">Home</Link>
					</li>
					<li className = "nav-item">
						<Link to="/list" className = "nav-link">List</Link>
					</li>
					<li className = "nav-item">
						<Link to="/favorites" className = "nav-link">Favorites</Link>
					</li>
				</ul>
			</div>
			<Search/>
			</div>
			</nav>
		</header>
	);
};

export default Header;
