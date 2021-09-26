import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<header>
			<h1 className='app-title'>Event Guests Management App</h1>
			<h2 className='guest-limit'>
				Guest Limit <span>100</span>
			</h2>
		</header>
	);
};

export default Header;
