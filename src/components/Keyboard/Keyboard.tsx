import { useState, useEffect, useRef } from 'react';
import {
	Wrapper,
	Logo,
	KeyboardWrapper,
	Button,
	ResetButton,
	Input,
	GreenCheckmark,
} from './style';

const PIN_CODE = 1234;

enum Message {
	DEFAULT = 'default',
	VALID = 'valid',
	INVALID = 'invalid',
}

const Keyboard = () => {
	const [pin, setPin] = useState('');
	const [pinForUser, setPinForUser] = useState('');
	const [message, setMessage] = useState<Message>(Message.DEFAULT);
	const inputRef = useRef<any>(null);

	useEffect(() => {
		if (pin.length === 4) {
			if (Number(pin) === PIN_CODE) {
				setMessage(Message.VALID);
			} else {
				setMessage(Message.INVALID);
				if (inputRef.current !== null) {
					inputRef?.current?.classList.add('error');
				}
			}
		}
	}, [pin]);

	const handleButton = (e: any) => {
		if (pin.length < 4) {
			setPin((prevValue) => prevValue + e.target.textContent);
			setPinForUser((prevValue) => {
				const hashedPin = '•'.repeat(prevValue.length);

				return hashedPin + e.target.textContent;
			});
		}
	};

	const renderMessage = () => {
		switch (message) {
			case 'valid':
				return 'Welcome';
			case 'invalid':
				return 'Invalid PIN. Try Again';
			case 'default':
				return 'Enter Your PIN';
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const regex = /^[0-9\b]+$/;
		const value = e.target.value;
		if (value === '' || regex.test(value)) {
			setMessage(Message.DEFAULT);
			setPin(value);
		}

		if (inputRef.current !== null) {
			inputRef?.current?.classList.remove('error');
		}
	};

	const handleReset = () => {
		if (pin !== '') {
			setPin('');
			setPinForUser('');
			setMessage(Message.DEFAULT);
			if (inputRef.current !== null) {
				inputRef?.current?.classList.remove('error');
			}
		}
	};

	return (
		<Wrapper>
			<Logo src='santander-logo.svg' alt='Santander Consumer Bank' />
			<h1>{renderMessage()}</h1>

			{message === Message.VALID ? (
				<GreenCheckmark
					src='green_checkmark.png'
					alt='green checkmark'
					width={150}
					height={150}
				/>
			) : (
				<>
					<Input
						type='text'
						minLength={4}
						maxLength={4}
						onChange={handleChange}
						value={pinForUser}
						ref={inputRef}
					/>

					<KeyboardWrapper>
						<div>
							<Button onClick={handleButton}>1</Button>
							<Button onClick={handleButton}>2</Button>
							<Button onClick={handleButton}>3</Button>
						</div>
						<div>
							<Button onClick={handleButton}>4</Button>
							<Button onClick={handleButton}>5</Button>
							<Button onClick={handleButton}>6</Button>
						</div>
						<div>
							<Button onClick={handleButton}>7</Button>
							<Button onClick={handleButton}>8</Button>
							<Button onClick={handleButton}>9</Button>
						</div>
						<div>
							<Button onClick={handleButton}>0</Button>
						</div>
					</KeyboardWrapper>
				</>
			)}

			<ResetButton onClick={handleReset} disabled={Number(pin) === 0}>
				{message === Message.VALID ? 'go back' : 'clear'}
			</ResetButton>
		</Wrapper>
	);
};

export default Keyboard;
