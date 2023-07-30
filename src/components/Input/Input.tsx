import { FC } from 'react';
import { IInput } from './types';
import { StyledInput } from './style';

export const Input: FC<IInput> = ({ pin, inputRef }) => (
	<StyledInput
		type='text'
		minLength={4}
		maxLength={4}
		value={pin.hashedValue}
		ref={inputRef}
		disabled
	/>
);
