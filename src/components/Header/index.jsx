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
`;
/** END STYLED */

function Header() {
	return (
		<StyledHeader>
			<Container>
			</Container>
		</StyledHeader> 
	);
}

export default Header;
