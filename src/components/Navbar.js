import React from 'react';
import { Link } from 'react-router-dom';

// Me lleva de vuelta al home (barra de busqueda || Tag Selection)
const NavBar = () => {
	return (
		<nav>
			<Link to='/'>
				<h3>Logo</h3>
			</Link>
		</nav>
	)
}

export default NavBar;