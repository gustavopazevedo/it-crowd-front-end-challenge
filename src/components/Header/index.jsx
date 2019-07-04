import React from 'react';
import styled from '@emotion/styled';

/** STYLED */
const StyledHeader = styled.header`
	width: 100%;
	height: auto;
	position: relative;
	margin: 0 auto;
	padding: 35px 35px 0 35px;
`;

const StyledHeaderBrand = styled.h1`
    width: 100%;
    color: #323544;
    margin: 0;
    font-weight: 600;
    font-size: 3.2rem;
    line-height: 100%;

    span {
        font-weight: 400;
    }
`;
/** END STYLED */

function Header({ children }) {
	return (
		<StyledHeader>
			<StyledHeaderBrand>
				<span>GetYour</span>Weather
			</StyledHeaderBrand>
		</StyledHeader> 
	);
}

export default Header;
