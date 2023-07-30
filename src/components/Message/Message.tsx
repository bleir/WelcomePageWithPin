import { FC } from 'react';
import { IMessage } from './types';
import { StyledMessage, StyledLink, Spinner, Error, Info } from './style';

export const Message: FC<IMessage> = ({ handleReset, error, info }) => {
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
			{error && <Error>{errorMessage}</Error>}
			{info && (
				<Info>
					<Spinner />
					<br />
					PIN is correct. Redirecting to Welcome Page...
				</Info>
			)}
		</StyledMessage>
	);
};
