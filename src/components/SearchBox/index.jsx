import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import uuidv4 from 'uuid/v4';

/** ACTIONS */
import actions from './../../actions';
/** END ACTIONS */

/** COMPONENTS */
import Tag from './../Tag'
/** END COMPONENTS */

/** STYLED */
const StyledSearchBoxWrapper = styled.div`
	width: 100%;
	margin: 0 auto;
	overflow: hidden;
	display: flex;
	flex-wrap: wrap;
	margin-top: 20px;
`;

const StyledSearchBoxField = styled.input`
	width: calc(100% - 100px);
	height: 50px;
	display: block;
	border: none;
	outline: none;
	font-size: 1.8rem;
	color: #323544;
	padding: 0 20px;
	background-color: #eff0f2;
	border-top-left-radius: 30px;
	border-bottom-left-radius: 30px;
`;

const StyledSearchBoxButton = styled.button`
	width: 100px;
	height: 50px;
	color: #fff;
	background-color: #009ad8;
	border: none;
	font-size: 1.8rem;
	cursor: pointer;
	border-top-right-radius: 30px;
	border-bottom-right-radius: 30px;
	font-weight: 600;
`;

const StyledSearchBoxSavedList = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	padding-top: 10px;
`;
/** END STYLED */

function SearchBox({ getWeather, weather }) {
	const [value, setValue] = useState('');
	const [savedItems, setSavedItems] = useState(JSON.parse(localStorage.getItem('savedItems')) || []);

	useEffect(function () {
		if (weather.isFulfilled) {
			saveOnLocalStorage(value);
		}
	}, [weather])

	function doSearch(e, searchValue) {
		if (e.which === 13 || e.keyCode === 13 || e.target.tagName === 'BUTTON' || e.target.tagName === 'SPAN') {
			if (searchValue) {
				getWeather(searchValue)
			}
		}
	}

	function removeSaved(item) {
		let _savedItems = savedItems.filter(savedItem => savedItems !== item);

		setSavedItems(_savedItems)
		localStorage.setItem('savedItems', JSON.stringify(_savedItems))
	}

	function saveOnLocalStorage(searchedValue) {
		if (savedItems.indexOf(searchedValue) === -1) {
			let _savedItems = [];

			if (savedItems.length === 5) {
				_savedItems = [searchedValue, ...savedItems.splice(0, 4)]
			} else {
				_savedItems = [searchedValue, ...savedItems]
			}

			setSavedItems(_savedItems)
			localStorage.setItem('savedItems', JSON.stringify(_savedItems))
		}
	}

	function showResults() {
		if (weather.isFulfilled) {
			return weather.data.map(item => (
				<ul key={uuidv4()} style={{ color: '#000', fontSize: '20px' }}>
					<li style={{ color: '#000' }}>Temperature: {item.main.temp}</li>
					<li style={{ color: '#000' }}>Pressure: {item.main.pressure}</li>
					<li style={{ color: '#000' }}>Humidity: {item.main.humidity}</li>
					<li style={{ color: '#000' }}>Min temperature: {item.main.temp_min}</li>
					<li style={{ color: '#000' }}>Max temperature: {item.main.temp_max}</li>
					<li style={{ color: '#000' }}>Lat: {item.coord.lat}</li>
					<li style={{ color: '#000' }}>Long: {item.coord.lon}</li>
				</ul>
			))
		} else if (weather.isRejected) {
			return (
				<p style={{ color: '#fff' }}>Sorry. We couldn't find Weather for {value}</p>
			)

		}
	}

	function showSavedItems() {
		if (savedItems.length > 0) {
			return (
				<StyledSearchBoxSavedList>
					{savedItems.map(item => (
						<Tag text={item} onClick={e => doSearch(e, item)} onClose={item => removeSaved(item)} key={uuidv4()} />
					))}
				</StyledSearchBoxSavedList>
			)
		}
	}

	return (
		<Fragment>
			<StyledSearchBoxWrapper>
				<StyledSearchBoxField
					type="text"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onKeyPress={(e) => doSearch(e, value)}
				/>
				<StyledSearchBoxButton onClick={e => doSearch(e, value)}>Get</StyledSearchBoxButton>
				{showSavedItems()}
			</StyledSearchBoxWrapper>
			{showResults()}
		</Fragment>
	);
}

export default connect(
	store => ({
		weather: store.weather
	}),
	actions
)(SearchBox);