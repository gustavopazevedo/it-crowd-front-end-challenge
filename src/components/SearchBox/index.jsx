import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

/** ACTIONS */
import actions from './../../actions';
/** END ACTIONS */

/** STYLED */
const StyledSearchBoxWrapper = styled.div`
	width: 100%;
	margin: 0 auto;
	padding: 0 20px;
	box-shadow: 0 1.5px 3px rgba(0, 0, 0, .25);
	overflow: hidden;
	background-color: #ebeced;
	padding: 25px;
	display: flex;
	flex-wrap: wrap;
`;

const StyledSearchBoxField = styled.input`
	width: calc(100% - 200px);
	height: 60px;
	display: block;
	border: none;
	outline: none;
	font-size: 3.2rem;
	color: #aaa;
	padding: 0 20px;
`;

const StyledSearchBoxButton = styled.button`
	width: 200px;
	height: 60px;
	color: rgba(255, 255, 255, 0.5);
	background-color: #009ad8;
	border: none;
	font-size: 3.2rem;
	cursor: pointer;
`;
/** END STYLED */

function SearchBox({ getWeather, weather }) {
	const [value, setValue] = useState('');

	function onKeyPress(e) {
		if (e.which == 13 || e.keyCode == 13) {
			if (value) {
				getWeather(value)
			}
		}
	}

	return (
		<Fragment>
			<StyledSearchBoxWrapper>
				<StyledSearchBoxField type="text" value={value} onChange={(e) => setValue(e.target.value)} onKeyPress={(e) => onKeyPress(e) } />
				<StyledSearchBoxButton onClick={() => value ? getWeather(value) : null}>Get</StyledSearchBoxButton>
			</StyledSearchBoxWrapper>
			{
				weather.isFulfilled
					?
					<ul style={{ color: '#fff', fontSize: '20px' }}>
						<li style={{ color: '#fff' }}>Temperature: {weather.data.main.temp}</li>
						<li style={{ color: '#fff' }}>Pressure: {weather.data.main.pressure}</li>
						<li style={{ color: '#fff' }}>Humidity: {weather.data.main.humidity}</li>
						<li style={{ color: '#fff' }}>Min temperature: {weather.data.main.temp_min}</li>
						<li style={{ color: '#fff' }}>Max temperature: {weather.data.main.temp_max}</li>
						<li style={{ color: '#fff' }}>Lat: {weather.data.coord.lat}</li>
						<li style={{ color: '#fff' }}>Long: {weather.data.coord.lon}</li>
					</ul>
					: null
			}
		</Fragment>
	);
}

export default connect(
	store => ({
		weather: store.weather
	}),
	actions
)(SearchBox);