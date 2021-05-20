import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100vh;
		font-size: 0.8rem;
		background-color: ${props => props.theme.color.background};
		color: ${props => props.theme.color.text};
	}
	div, span {
		margin: 0;
		padding: 0;
	}
	h1, h2, h3, h4, h5, h6, p {
		margin: 0;
		padding: 0;
	}
	h1 {
		font-size: calc(0.4rem + 1.5em);
		font-weight: 600;
	}
	h2 {
		font-size: calc(0.4rem + 1.4em);
		font-weight: 600;
	}
	h3 {
		font-size: calc(0.4rem + 1.3em);
		font-weight: 600;
	}
	h4 {
		font-size: calc(0.4rem + 1em);
		font-weight: 600;
	}
	h5 {
		font-size: calc(0.4rem + 0.9em);
		font-weight: 600;
	}
	h6 {
		font-size: calc(0.4rem + 0.4em);
		font-weight: 600;
	}
	p {
		font-size: calc(0.4rem + 0.5em);
		font-weight: 500;
	}
	a {
		color: ${props => props.theme.color.primary};
		text-decoration: none;
		&:focus,
		&:hover {
			color: ${props => props.theme.color.primary}BB;
		}
	}
	.pointer {
		cursor: pointer;
	}
`;

export default GlobalStyle;