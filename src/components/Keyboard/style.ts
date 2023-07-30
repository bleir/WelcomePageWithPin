import styled from 'styled-components';

export const KeyboardWrapper = styled.div`
	font-family: 'Santander', sans-serif;
	margin: 20px 0 30px;
`;

export const Button = styled.button`
	width: 50px;
	height: 50px;
	padding: 10px;
	font-size: 20px;
	margin: 7px;
	border-radius: 6px;
	border: 1px solid #ccc;
	background: #eaeaea;
	cursor: pointer;

	&:hover {
		box-shadow: 0px 0px 10px #ccc;
	}

	&:active {
		width: 48px;
		height: 48px;
	}
`;
