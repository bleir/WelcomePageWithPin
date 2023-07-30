import { createContext } from 'react';
import { IMyContext } from './types';

export const MyContext = createContext<IMyContext>({
	pin: { value: '', hashedValue: '' },
	setPin: () => {},
	error: false,
	setError: () => {},
	nextPage: false,
	setNextPage: () => {},
	inputRef: null,
});
