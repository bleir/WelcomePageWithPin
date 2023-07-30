import { FC, useContext } from 'react';
import { MyContext } from 'MyContext';
import { IMyContext } from 'types';
import { StyledInput } from './style';

export const Input: FC = () => {
	const {
		pin: { hashedValue },
		inputRef,
	} = useContext<IMyContext>(MyContext);

	return (
		<StyledInput
			type='text'
			minLength={4}
			maxLength={4}
			value={hashedValue}
			ref={inputRef}
			disabled
		/>
	);
};
