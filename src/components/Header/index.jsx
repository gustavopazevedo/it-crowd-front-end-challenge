import React from 'react';
import styled from '@emotion/styled';

/** COMPONENTS */
import Container from "./../Container";
/** END COMPONENTS */

/** STYLED */
const StyledHeader = styled.header`
	width: 100%;
	height: auto;
	position: relative;
	margin: 0 auto;
	background-color: #f00;
`;
/** END STYLED */

function Header() {
	return (
		<StyledHeader>
			<Container>
				Header
			</Container>
		</StyledHeader> 
	);
}

export default Header;
