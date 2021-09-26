import React from 'react';
import './Guest.css';

const Guest = (props) => {
	const { full_name, gender, imag, relation, contact, family_members } =
		props.guest;

	return (
		<article className='guest-card'>
			<div className='guest-img'>
				<img src={imag} alt='guest imag' />
			</div>
			<div className='guest-info'>
				<h2>{full_name}</h2>
				<p className='guest-relation'>{relation}</p>
				<div className='guest-info-wrapper'>
					<p>
						Gender: <span>{gender}</span>
					</p>
					<p>
						Family Members: <span>{family_members}</span>
					</p>
				</div>
				<p>
					<span style={{ marginRight: '8px' }}>
						<i class='fas fa-phone-square-alt'></i>
					</span>
					{contact}
				</p>
				<button
					className='add-guest-btn'
					onClick={() => props.guestHandler(props.guest)}
				>
					add to guest list
				</button>
			</div>
		</article>
	);
};

export default Guest;
