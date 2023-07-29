import { FC, useContext } from 'react';
import { MyContext } from '../../MyContext';
import { KeyboardWrapper, Button } from './style';

const Keyboard: FC = () => {
	const { pin, setPin, setPinForUser } = useContext(MyContext);

	const handleButton = (e: any) => {
		if (pin.length < 4) {
			setPin((prevValue: any) => prevValue + e.target.textContent);
			setPinForUser((prevValue: any) => {
				const hashedPin = '•'.repeat(prevValue.length);

				return hashedPin + e.target.textContent;
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

export default Keyboard;
