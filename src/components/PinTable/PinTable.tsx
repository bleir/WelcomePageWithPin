import { useState, useEffect, useRef } from 'react';
import { Input } from 'components/Input';
import { Keyboard } from 'components/Keyboard';
import { Message } from 'components/Message';
import { IPin } from './types';
import { Wrapper, Logo, GreenCheckmark, Title, Button } from './style';

const PIN_CODE = 1234;

const PinTable = () => {
	const [pin, setPin] = useState<IPin>({ value: '', hashedValue: '' });
	const [error, setError] = useState(false);
	const [info, setInfo] = useState(false);
	const [nextPage, setNextPage] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleReset = () => {
		if (pin.value !== '') {
			setPin({ value: '', hashedValue: '' });
			setInfo(false);
			setNextPage(false);
			setError(false);
			if (inputRef?.current !== null) {
				inputRef?.current?.classList.remove('error');
			}
		}
	};

	useEffect(() => {
		if (pin.value.length === 4) {
			if (Number(pin.value) === PIN_CODE) {
				setInfo(true);
				setTimeout(() => {
					setNextPage(true);
				}, 3000);
			} else {
				setError(true);
				if (inputRef.current !== null) {
					inputRef.current.classList.add('error');
				}
			}
		}
	}, [pin.value]);

	return (
		<Wrapper>
			<Logo
				src='assets/santander-logo.svg'
				alt='Santander Consumer Bank'
			/>

			<Title>{nextPage ? 'Welcome' : 'Please Log in'}</Title>

			{nextPage ? (
				<>
					<GreenCheckmark
						src='assets/green_checkmark.png'
						alt='green checkmark'
						width={150}
						height={150}
					/>
					<Button onClick={handleReset}>Go to Homepage</Button>
				</>
			) : (
				<>
					<Input pin={pin} inputRef={inputRef} />

					<Message
						error={error}
						info={info}
						handleReset={handleReset}
					/>

					<Keyboard pin={pin} setPin={setPin} />
				</>
			)}
		</Wrapper>
	);
};

export default PinTable;
