import { FC, useContext, ChangeEvent } from 'react';
import { MyContext } from '../../MyContext';
import { IMyContext, MessageType } from '../types';
import { StyledInput } from './style';

const Input: FC = () => {
	const { setPin, setMessage, pinForUser, inputRef } =
		useContext<IMyContext>(MyContext);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const regex = /^[0-9\b]+$/;
		const value = e.target.value;
		if (value === '' || regex.test(value)) {
			setMessage(MessageType.DEFAULT);
			setPin(value);
		}

		if (inputRef.current !== null) {
			inputRef?.current?.classList.remove('error');
		}
	};

	return (
		<StyledInput
			type='text'
			minLength={4}
			maxLength={4}
			onChange={handleChange}
			value={pinForUser}
			ref={inputRef}
			disabled
		/>
	);
};

export default Input;
