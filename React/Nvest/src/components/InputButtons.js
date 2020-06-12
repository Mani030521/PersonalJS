import React, { Fragment } from 'react';

const InputButtons = () => {
	const backSpace = () => <i class='fas fa-backspace'></i>;
	const deletePNG = () => <i class='far fa-trash-alt'></i>;
	const tempArray = [7, 8, 9, 4, 5, 6, 1, 2, 3, backSpace(), 0, deletePNG()];
	return (
		<Fragment>
			<div className='ButtonMainContainer'>
				{tempArray.map((buttonData) => (
					<div className='ButtonContainer'>
						<button className='Buttons'>{buttonData}</button>
					</div>
				))}
			</div>
		</Fragment>
	);
};

export default InputButtons;
