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

export const Message = styled.div`
	margin: 10px 0 0;

	.error {
		color: #eb0000;
	}

	.info {
		color: #000;
	}
`;

export const Spinner = styled.span`
	width: 25px;
	height: 25px;
	margin: 5px 0;
	border-radius: 50%;
	display: inline-block;
	border-top: 3px solid #eb0000;
	border-right: 3px solid #eb0000;
	box-sizing: border-box;
	animation: rotation 1s linear infinite;

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export const StyledLink = styled.a`
	color: #eb0000;
	text-decoration: underline;

	&:hover {
		text-decoration: none;
	}
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
