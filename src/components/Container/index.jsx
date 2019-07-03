import React from 'react';
import styled from '@emotion/styled';

/** STYLED */
const StyledContainer = styled.div`
	width: 1170px;
	margin: 0 auto;
	display: block;

	@media screen and (max-width: 1024px) {
		width: calc(100% - 80px);
	}
`;
/** END STYLED */

function Container({ children }) {
	return (
		<StyledContainer>{children}</StyledContainer> 
	);
}

export default Container;
