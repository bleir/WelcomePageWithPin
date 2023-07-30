import { Dispatch, SetStateAction, RefObject } from 'react';
import { IPin } from './components/PinTable/types';

export enum MessageType {
	DEFAULT = 'default',
	VALID = 'valid',
	INVALID = 'invalid',
}

export interface IMyContext {
	pin: { value: string; hashedValue: string };
	setPin: Dispatch<SetStateAction<IPin>>;
	message: MessageType;
	setMessage: Dispatch<SetStateAction<MessageType>>;
	inputRef: RefObject<HTMLInputElement> | null;
}
