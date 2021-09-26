import React from 'react';
import './Header.css';

const Header = (props) => {
	return (
		<header>
			<h1 className='app-title'>Event Guests Management App</h1>
			<h2 className='guest-limit'>
				Guest Limit <span>{props.guestLimit}</span>
			</h2>
		</header>
	);
};

export default Header;
