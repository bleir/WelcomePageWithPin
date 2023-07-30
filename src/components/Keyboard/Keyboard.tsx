import React, { FC } from 'react';
import { IKeyboard } from './types';
import { KeyboardWrapper, Button } from './style';

export const Keyboard: FC<IKeyboard> = ({ pin, setPin }) => {
	const { value, hashedValue } = pin;
	const handleButton = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		const target = e.target as HTMLElement;
		const restPin = target.textContent;

		if (value.length < 4) {
			setPin({
				value: value + restPin,
				hashedValue: '•'.repeat(hashedValue.length) + restPin,
			});
		}
	};

	return (
		<KeyboardWrapper>
			<Button onClick={handleButton}>1</Button>
			<Button onClick={handleButton}>2</Button>
			<Button onClick={handleButton}>3</Button>
			<br />
			<Button onClick={handleButton}>4</Button>
			<Button onClick={handleButton}>5</Button>
			<Button onClick={handleButton}>6</Button>
			<br />
			<Button onClick={handleButton}>7</Button>
			<Button onClick={handleButton}>8</Button>
			<Button onClick={handleButton}>9</Button>
			<br />
			<Button onClick={handleButton}>0</Button>
		</KeyboardWrapper>
	);
};
