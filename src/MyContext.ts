import { createContext } from 'react';
import { IMyContext } from './components/types';

export const MyContext = createContext<IMyContext>({
	pin: '',
	setPin: '',
	pinForUser: '',
	setPinForUser: null,
	message: '',
	setMessage: null,
	inputRef: null,
});
