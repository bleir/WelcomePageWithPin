import { RefObject } from 'react';
import { IPin } from 'components/PinTable/types';

export interface IInput {
	pin: IPin;
	inputRef: RefObject<HTMLInputElement> | null;
}
