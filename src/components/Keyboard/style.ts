import styled from 'styled-components';

export const Wrapper = styled.div`
	font-family: 'Santander', sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Logo = styled.img`
	margin: 40px 0 20px;
`;

export const GreenCheckmark = styled.img`
	margin: 20px 0 40px;
`;

export const KeyboardWrapper = styled.div`
	font-family: 'Santander', sans-serif;
	margin: 30px 0;
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

export const ResetButton = styled.button`
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

export const Input = styled.input`
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
