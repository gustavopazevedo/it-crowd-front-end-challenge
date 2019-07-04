import React from "react";
import { css, Global } from "@emotion/core";
import styled from "@emotion/styled";

/** NORMALIZE.CSS */
import "normalize.css";
/** END NORMALIZE.CSS */

/** GLOBAL STYLES */
const GlobalStyles = css`
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap');

	:root {
		--default-font-family: "Montserrat", sans-serif;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;

		&:before,
		&:after {
			box-sizing: border-box;
		}
	}

	html {
		font-size: 10px;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	body {
		text-rendering: optimizelegibility;
		font-family: var(--default-font-family);
		color: #000;
	}
`;
/** END GLOBAL STYLES */

/** STYLED */
const StyledLayout = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: #323544;
	position: relative;
	display: block;
`;

const StyledMain = styled.main`
	width: calc(100% - 600px);
	min-height: 100vh;
	z-index: 1;
	position: fixed;
	top: 0;
	right: 0;
`;
/** END STYLED */

function Layout({ children }) {
	return (
		<StyledLayout>
			<Global styles={GlobalStyles} />
			<StyledMain>{children}</StyledMain>
		</StyledLayout>
	);
}

export default Layout;
