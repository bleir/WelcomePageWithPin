import { Dispatch, SetStateAction } from 'react';

export enum MessageType {
	DEFAULT = 'default',
	VALID = 'valid',
	INVALID = 'invalid',
}

export interface IMyContext {
	pin: string;
	// setPin: Dispatch<SetStateAction<any>>;
	setPin: any;
	pinForUser: any;
	// setPinForUser: Dispatch<SetStateAction<string>>;
	setPinForUser: any;
	message: any;
	// setMessage: Dispatch<SetStateAction<MessageType>>;
	setMessage: any;
	inputRef: any;
}
