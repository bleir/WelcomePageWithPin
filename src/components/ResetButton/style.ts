import styled from 'styled-components';

export const Button = styled.button`
	border-radius: 6px;
	background: #eb0000;
	color: #fff;
	font-family: 'Santander', sans-serif;
	font-size: 15px;
	text-transform: capitalize;
	padding: 8px 20px;
	cursor: pointer;
	border: 0;

	&:hover {
		background: #d10000;
	}

	&:active {
		background: #b80000;
	}

	&:disabled {
		background: #e58b8b;
		cursor: default;
	}
`;
