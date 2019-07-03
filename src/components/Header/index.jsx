import React from 'react';
import styled from '@emotion/styled';

const StyledHeader = styled.header`
	width: 100%;
	height: auto;
	position: relative;
	margin: 0 auto;
	background-color: #f00;
`;

function Header({ children }) {
	return (
		<StyledHeader>
			Header
		</StyledHeader> 
	);
}

export default Header;
