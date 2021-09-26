import React from 'react';
import './SelectedGuest.css';

const SelectedGuest = (props) => {
	const { imag, full_name, family_members } = props.selectedGuest;
	return (
		<div className='selected-guest'>
			<img src={imag} alt='guest imag' />
			<div className='selected-guest-details'>
				<h4>{full_name}</h4>
				<p>
					family members{' '}
					<span className='family-icon'>
						<i class='fas fa-users'></i>
					</span>
					{family_members}
				</p>
			</div>
		</div>
	);
};

export default SelectedGuest;
