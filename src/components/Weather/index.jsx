import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

/** STYLED */
const StyledWeather = styled.ul`
    width: calc(100% - 70px);
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
`;

const StyledWeatherItem = styled.li`
    width: calc(33.33% - 6.66px);
    height: 175px;
    list-style-type: none;
    font-size: 2rem;
    color: #323544;
    background-color: #eff0f2;
    border-radius: 10px;
    margin: 0 10px 10px 0;
	text-align: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: center;

	&:hover {
		background-color: #009ad8;
		color: #fff;
	}

    &:nth-child(3n) {
        margin-right: 0;
    }

    &:last-of-type {
        border-bottom: none;
    }

    span {
		width: 100%;
        display: block;
		color: inherit;
        font-weight: 600;
        font-size: 4.4rem;
		margin-top: 10px;
		text-align: center;
    }
`;
/** END STYLED */

function Weather({ weather }) {
    function fromKelvinToCelsius(value) {
        return `${Math.round(value - 273.15)} °C`
    }

    function showResults() {
        if (weather.isFulfilled) {
            const { temp, pressure, humidity, temp_min, temp_max } = weather.data.main;

            return (
                <StyledWeather>
                    <StyledWeatherItem>
                        Current Temperature
                        <span>{fromKelvinToCelsius(temp)}</span>
                    </StyledWeatherItem>
					<StyledWeatherItem>
                        Minimum Temperature
                        <span>{fromKelvinToCelsius(temp_min)}</span>
                    </StyledWeatherItem>
                    <StyledWeatherItem>
                        Maximum Temperature
                        <span>{fromKelvinToCelsius(temp_max)}</span>
                    </StyledWeatherItem>
                    <StyledWeatherItem>
                        Pressure
                        <span>{pressure}</span>
                    </StyledWeatherItem>
                    <StyledWeatherItem>
                        Humidity
                        <span>{humidity}%</span>
                    </StyledWeatherItem>

                </StyledWeather>
            )
        } else if (weather.isRejected) {
            return (
                <p>Sorry. We couldn't find <strong>Weather</strong> for the typed city</p>
            )

        }
    }


    if (weather.isFulfilled) {
        return showResults()
    }

    return false
}

export default connect(
    store => ({
        weather: store.weather
    })
)(Weather);