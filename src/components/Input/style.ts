import styled from 'styled-components';

export const StyledInput = styled.input`
	font-size: 20px;
	font-weight: bold;
	text-align: center;
	letter-spacing: 0.5rem;
	padding: 10px;
	border-radius: 8px;
	border: 1px solid #ccc;
	width: 10rem;
	transition: box-shadow 0.2s ease-out;

	&:focus {
		outline: none;
	}

	&.error {
		border: 1px solid #eb0000;
		box-shadow: 0 0 10px #e08282;
	}
`;
