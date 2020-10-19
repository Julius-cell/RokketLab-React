import React from 'react';
import { Link } from 'react-router-dom';
import Halloween from '../halloween-witch-hat.png'

// Me lleva de vuelta al home (barra de busqueda || Tag Selection)
const NavBar = () => {
	return (
		<div className="logo animate__animated animate__bounceInDown">
			<Link to='/'>
				<img src={Halloween} alt="halloween-hat"/>
			</Link>
		</div>
	)
};

export default NavBar;