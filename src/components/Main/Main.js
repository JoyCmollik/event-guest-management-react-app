import React, { useEffect, useState } from 'react';
import Guest from '../Guest/Guest';
import SelectedList from '../SelectedList/SelectedList';
import './Main.css';

const Main = () => {
	const [guests, setGuests] = useState([]);
	const [selectedGuests, setSelectedGuests] = useState([]);

	// fetching guests from local JSON file
	useEffect(() => {
		fetch('./fakedb.json')
			.then((response) => response.json())
			.then((data) => setGuests(data));
	}, []);

	// event handlers
	const guestHandler = (newGuest) => {
		const tempSelectedGuests = [...selectedGuests, newGuest];
		setSelectedGuests(tempSelectedGuests);
	};

	return (
		<div className='main-container'>
			<div className='guests-container'>
				{guests.map((guest) => (
					<Guest
						key={guest.id}
						guest={guest}
						guestHandler={guestHandler}
					/>
				))}
			</div>
			<div className='final-list-container'>
				<SelectedList selectedGuests={selectedGuests} />
			</div>
		</div>
	);
};

export default Main;
