import React from 'react';
import styled from "@emotion/styled";
import SearchBox from "./../SearchBox";

/** COMPONENTS */
import Header from './../Header';
import Weather from './../Weather';
/** END COMPONENTS */

/** STYLED */
const StyledSidebar = styled.div`
    width: 600px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 2;
`;


/** END STYLED */

function Sidebar() {
    return (
        <StyledSidebar>
            <Header />
            <SearchBox />
            <Weather />
        </StyledSidebar>
    );
}

export default Sidebar;
