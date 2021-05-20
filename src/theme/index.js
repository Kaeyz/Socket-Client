import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import React from "react";
import variables from "./variables";
import GlobalStyle from "./GlobalStyle";

const Theme = ({ children }) => {
	return (
		<ThemeProvider theme={variables}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};

Theme.propTypes = {
	children: PropTypes.any.isRequired,
};

export default Theme;