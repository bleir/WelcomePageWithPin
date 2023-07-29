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

	&:focus {
		outline: none;
	}

	&.error {
		background: #ffc1c1;
		color: #eb0000;
		border: 1px solid #eb0000;
	}
`;
