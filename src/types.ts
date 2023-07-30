import { Dispatch, SetStateAction, RefObject } from 'react';
import { IPin } from './components/PinTable/types';

export interface IMyContext {
	pin: { value: string; hashedValue: string };
	error: boolean;
	setError: Dispatch<SetStateAction<boolean>>;
	setPin: Dispatch<SetStateAction<IPin>>;
	nextPage: boolean;
	setNextPage: Dispatch<SetStateAction<boolean>>;
	inputRef: RefObject<HTMLInputElement> | null;
}
