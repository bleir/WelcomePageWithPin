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

export const Title = styled.h1`
	font-size: 40px;
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
