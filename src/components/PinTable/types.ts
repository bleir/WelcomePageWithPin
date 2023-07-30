export interface IPin {
	value: string;
	hashedValue: string;
}

export enum MessageType {
	INFO = 'info',
	ERROR = 'error',
	DEFAULT = '',
}
