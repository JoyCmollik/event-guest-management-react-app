import React from 'react';
import './Guest.css';

const Guest = (props) => {
	const { full_name, gender, imag, relation, contact, family_members } =
		props.guest;

	return (
		<article className='guest-card'>
			<img width='100px' src={imag} alt='guest imag' />
			<h2>{full_name}</h2>
			<p>{gender}</p>
			<p>{relation}</p>
			<p>{family_members}</p>
			<p>{contact}</p>
			<button onClick={() => props.guestHandler(props.guest)}>
				select as event guest
			</button>
		</article>
	);
};

export default Guest;
