import { FC, useContext } from 'react';
import { MyContext } from 'MyContext';
import { MessageType } from 'types';
import { Button } from './style';

export const ResetButton: FC = () => {
	const {
		pin: { value },
		setPin,
		message,
		setMessage,
		inputRef,
	} = useContext(MyContext);

	const handleReset = () => {
		if (value !== '') {
			setPin({ value: '', hashedValue: '' });
			setMessage(MessageType.DEFAULT);
			if (inputRef?.current !== null) {
				inputRef?.current?.classList.remove('error');
			}
		}
	};

	return (
		<Button onClick={handleReset} disabled={Number(value) === 0}>
			{message === MessageType.VALID ? 'go to the homepage' : 'clear'}
		</Button>
	);
};
