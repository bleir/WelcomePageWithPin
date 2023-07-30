import { FC } from 'react';
import { IMessage } from './types';
import { MessageType } from 'components/PinTable/types';
import { StyledMessage, StyledLink, Spinner, Error, Info } from './style';

export const Message: FC<IMessage> = ({ handleReset, type }) => {
	const errorMessage = (
		<>
			PIN is invalid.{' '}
			<StyledLink href='#' onClick={handleReset}>
				Clear field
			</StyledLink>{' '}
			and try again.
		</>
	);

	return (
		<StyledMessage>
			{type === MessageType.ERROR ? (
				<Error>{errorMessage}</Error>
			) : (
				<Info>
					<Spinner />
					<br />
					PIN is correct. Redirecting to Welcome Page...
				</Info>
			)}
		</StyledMessage>
	);
};
