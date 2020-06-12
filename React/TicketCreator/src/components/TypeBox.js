import React, { Fragment, useRef } from 'react';

const TypeBox = (props) => {
  const { onHandleChange, onKeyDown, disabledFlag, ticketValue } = props;
  const ref = useRef()
	return (
		<Fragment>
			<input
				placeholder='Enter a six digit Number'
        type='text'
        ref={ref}
				onKeyDownCapture={() => onKeyDown(ref)}
				value={ticketValue}
				onChange={onHandleChange}
				className='TypingBox'
			/>
		</Fragment>
	);
};

export default TypeBox;
