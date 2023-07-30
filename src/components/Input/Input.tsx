import { FC } from 'react';
import { IInput } from './types';
import { StyledInput } from './style';

export const Input: FC<IInput> = ({ pin, inputRef }) => (
	<StyledInput type='text' value={pin.hashedValue} ref={inputRef} disabled />
);
