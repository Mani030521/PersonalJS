import React, { useState, useEffect } from 'react';
import InputButtons from './InputButtons';
import TypeBox from './TypeBox';
import AddButton from './AddButton';

const App = () => {
	const [ticketValue, setTicketValue] = useState('');

	const onHandleChange = (event, buttonTypedValue) => {
		console.log(event, 'handle-==========');
		if (event.keyCode === 13) {
			if (ticketValue.length === 6) {
				alert('submited');
			} else {
				alert('should be greater than 5');
			}
		} else if (ticketValue.length !== 6 || event.keyCode === 8) {
			setTicketValue(
				buttonTypedValue ? buttonTypedValue + ticketValue : event.target.value
			);
		} else {
		}
	};
	const onKeyDown = (ref) => {
		console.log(ticketValue.slice(0, 6), 'eydom=============');
		if (event.keyCode === 8 && ticketValue.length === 6) {
			setTicketValue(ticketValue.slice(0, 6));
		}
	};
	console.log(ticketValue, '====');
	return (
		<div className='MainContainer'>
			<TypeBox
				ticketValue={ticketValue}
				onKeyDown={(ref) => onKeyDown(ref)}
				onHandleChange={onHandleChange}
			/>
			<InputButtons />
			<AddButton />
		</div>
	);
};

export default App;
