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
`;
