import React from 'react';
import SelectedGuest from '../SelectedGuest/SelectedGuest';
import './SelectedGuests.css';

const SelectedGuests = (props) => {
	const { selectedGuests } = props;

	// calculating total number of guests
	const totalFamilyMembers = selectedGuests.reduce(
		(prev, curr) => prev + curr.family_members,
		0
	);

	const totalSelected = selectedGuests.length;

	return (
		<div className='selected-guests'>
			<h1 className='selected-guest-title'>
				guest list{' '}
				<span className='guest-card-count'>{totalSelected}</span>
			</h1>
			<div className='selected-guest-info'>
				<p>
					Total Selected:<span> {totalSelected}</span>
				</p>
				<p>
					Family Members:<span> {totalFamilyMembers}</span>
				</p>
				<div className='grand-total'>
					<p>
						Grand Total:
						<span> {totalSelected + totalFamilyMembers}</span>
					</p>
				</div>
			</div>
			<div className='selected-guest-list-container'>
				{totalSelected
					? selectedGuests.map((selectedGuest) => (
							<SelectedGuest selectedGuest={selectedGuest} />
					  ))
					: 'No One Selected Yet'}
			</div>
		</div>
	);
};

export default SelectedGuests;
