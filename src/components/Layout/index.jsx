import React, { Fragment } from "react";
import { css, Global } from "@emotion/core";
import styled from "@emotion/styled";

/** COMPONENTS */
import Header from "./../Header";
import Footer from "./../Footer";
/** END COMPONENTS */

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
`;

const StyledMain = styled.main`
	width: 100%;
	min-height: 800px;
`;
/** END STYLED */

function Layout({ children }) {
	return (
		<Fragment>
			<Global styles={GlobalStyles} />
			<StyledLayout>
				<Header />
				<StyledMain>{children}</StyledMain>
				<Footer />
			</StyledLayout>
		</Fragment>
	);
}

export default Layout;
