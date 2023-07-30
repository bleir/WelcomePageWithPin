import { createContext } from 'react';
import { IMyContext, MessageType } from './types';

export const MyContext = createContext<IMyContext>({
	pin: { value: '', hashedValue: '' },
	setPin: () => {},
	message: MessageType.DEFAULT,
	setMessage: () => {},
	inputRef: null,
});
