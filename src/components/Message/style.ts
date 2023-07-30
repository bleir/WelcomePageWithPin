import styled from 'styled-components';

export const StyledMessage = styled.div`
	margin: 10px 0 0;
`;

export const Error = styled.div`
	color: #eb0000;
`;

export const Info = styled.div`
	color: #000;
`;

export const StyledLink = styled.a`
	color: #eb0000;
	text-decoration: underline;

	&:hover {
		text-decoration: none;
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
