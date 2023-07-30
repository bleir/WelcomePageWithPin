import { Dispatch, SetStateAction } from 'react';
import { IPin } from 'components/PinTable/types';

export interface IKeyboard {
	pin: IPin;
	setPin: Dispatch<SetStateAction<IPin>>;
}
