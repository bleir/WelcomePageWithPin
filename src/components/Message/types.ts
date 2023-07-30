import { MessageType } from 'components/PinTable/types';

export interface IMessage {
	type: MessageType;
	handleReset: () => void;
}
