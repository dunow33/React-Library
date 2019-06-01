import React from 'react';
import efalogo from '../assets/efa-shield.png';

const Header = () => {
	return (
		<nav className="navbar navbar-inverse">
			<img src={efalogo} alt="efalogo" className="logo" />
			<h1>React Library</h1>
		</nav>
	);
}

export default Header;
