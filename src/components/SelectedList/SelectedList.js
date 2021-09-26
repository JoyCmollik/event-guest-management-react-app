import React from 'react';
import './SelectedList.css';

const SelectedList = (props) => {
	const { selectedGuests } = props;

	return (
		<div>
			<h1>Selected Guests: {selectedGuests.length}</h1>
			<ul>
				{selectedGuests.map((selectedGuest) => (
					<li>{selectedGuest.full_name}</li>
				))}
			</ul>
		</div>
	);
};

export default SelectedList;
