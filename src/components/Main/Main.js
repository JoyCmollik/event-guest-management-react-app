import React, { useEffect, useState } from 'react';
import Guest from '../Guest/Guest';
import SelectedGuests from '../SelectedGuests/SelectedGuests';
import './Main.css';

const Main = (props) => {
	const [guests, setGuests] = useState([]);
	const [selectedGuests, setSelectedGuests] = useState([]);

	// fetching guests from local JSON file
	useEffect(() => {
		fetch('./fakedb.json')
			.then((response) => response.json())
			.then((data) => setGuests(data));
	}, []);

	const validateNewGuest = (newGuest) => {
		// --------------- validations -----------------
		// checking if already selected
		const isExisting = selectedGuests.find(
			(guest) => guest.id === newGuest.id
		);
		// calculating current guests total
		const totalFamilyMembers = selectedGuests.reduce(
			(prev, curr) => prev + curr.family_members,
			0
		);
		const totalGuests = selectedGuests.length + totalFamilyMembers;

		// if adding newGuest reaches limit or exists, event will not proceed
		if (
			isExisting ||
			totalGuests + newGuest.family_members > props.guestLimit
		) {
			return false;
		}
		return true;
	};

	// event handlers
	const guestHandler = (newGuest) => {
		if (!validateNewGuest(newGuest)) {
			return;
		}

		//if passed the validation, then being added to the list
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
				<SelectedGuests selectedGuests={selectedGuests} />
			</div>
		</div>
	);
};

export default Main;
