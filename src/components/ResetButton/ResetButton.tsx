import { FC, useContext } from 'react';
import { MyContext } from '../../MyContext';
import { MessageType } from '../types';
import { StyledResetButton } from './style';

const ResetButton: FC = () => {
	const { pin, setPin, message, setMessage, setPinForUser, inputRef } =
		useContext(MyContext);

	const handleReset = () => {
		if (pin !== '') {
			setPin('');
			setPinForUser('');
			setMessage(MessageType.DEFAULT);
			if (inputRef.current !== null) {
				inputRef?.current?.classList.remove('error');
			}
		}
	};

	return (
		<StyledResetButton onClick={handleReset} disabled={Number(pin) === 0}>
			{message === MessageType.VALID ? 'go to the homepage' : 'clear'}
		</StyledResetButton>
	);
};

export default ResetButton;
