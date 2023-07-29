import { useState, useEffect, useRef } from 'react';
import { MyContext } from '../../MyContext';
import Input from '../Input/Input';
import Keyboard from '../Keyboard/Keyboard';
import ResetButton from '../ResetButton/ResetButton';
import { MessageType } from '../types';
import { Wrapper, Logo, GreenCheckmark, Title } from './style';

const PIN_CODE = 1234;

const PinTable = () => {
	const [pin, setPin] = useState('');
	const [pinForUser, setPinForUser] = useState('');
	const [message, setMessage] = useState<MessageType>(MessageType.DEFAULT);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (pin.length === 4) {
			if (Number(pin) === PIN_CODE) {
				setMessage(MessageType.VALID);
			} else {
				setMessage(MessageType.INVALID);
				if (inputRef.current !== null) {
					inputRef?.current?.classList.add('error');
				}
			}
		}
	}, [pin]);

	const renderMessage = () => {
		switch (message) {
			case MessageType.VALID:
				return 'Welcome';
			case MessageType.INVALID:
				return 'Invalid PIN. Try Again';
			case MessageType.DEFAULT:
				return 'Enter Your PIN';
		}
	};

	return (
		<MyContext.Provider
			value={{
				pin,
				setPin,
				message,
				setMessage,
				pinForUser,
				setPinForUser,
				inputRef,
			}}
		>
			<Wrapper>
				<Logo src='santander-logo.svg' alt='Santander Consumer Bank' />
				<Title>{renderMessage()}</Title>

				{message === MessageType.VALID ? (
					<GreenCheckmark
						src='green_checkmark.png'
						alt='green checkmark'
						width={150}
						height={150}
					/>
				) : (
					<>
						<Input />
						<Keyboard />
					</>
				)}
				<ResetButton />
			</Wrapper>
		</MyContext.Provider>
	);
};

export default PinTable;
