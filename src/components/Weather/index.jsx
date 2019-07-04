import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

/** STYLED */
const StyledWeather = styled.div`
    width: 100%;
    border-top: 1px solid #eee;
`;
/** END STYLED */

function Weather({ weather }) {
    if (weather.isFulfilled) {
        console.log(weather)
    }

    return (
        <StyledWeather>
            Teste
        </StyledWeather>
    )
}

export default connect(
	store => ({
		weather: store.weather
	})
)(Weather);