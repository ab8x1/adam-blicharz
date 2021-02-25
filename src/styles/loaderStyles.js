import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
	100% {
		transform: rotate(360deg);
	}
`;

export const LoadingSpinner = styled.div`
	pointer-events: none;
	width: 25px;
	height: 25px;
	border: 3px solid transparent;
	border-color: #eee;
	border-top-color: transparent;
	border-radius: 50%;
	animation: ${rotate} 0.6s linear infinite;
`