import React from 'react';
import styled from "@emotion/styled";
import SearchBox from "./../SearchBox";

/** STYLED */
const StyledSidebar = styled.div`
    width: 600px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    padding: 40px;
`;

const StyledSidebarTitle = styled.h1`
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

function Sidebar() {
    return (
        <StyledSidebar>
            <StyledSidebarTitle>
                <span>GetYour</span>Weather
            </StyledSidebarTitle>
            <SearchBox />
        </StyledSidebar>
    );
}

export default Sidebar;
