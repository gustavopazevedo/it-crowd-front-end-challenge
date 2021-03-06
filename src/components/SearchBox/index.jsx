import React, { Fragment, useEffect, useState } from 'react';
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
	padding: 0 35px 35px 35px;
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
	outline: none;
`;

const StyledSearchBoxSavedList = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	padding-top: 10px;
`;
/** END STYLED */

function SearchBox({ getInfoLatLng, getWeather, infoLatLng, weather }) {
	const [value, setValue] = useState('');
	const [savedItems, setSavedItems] = useState(JSON.parse(localStorage.getItem('savedItems')) || []);

	/** EXECUTE ONLY AFTER COMPONENT MOUNT, GET LAT AND LNG OF USER AND SET CITY  */
	useEffect(function () {
		navigator.geolocation.getCurrentPosition(function(position) {
			const { latitude, longitude } = position.coords;
			getInfoLatLng(latitude, longitude)
		})
	}, [])

	/** EXECUTE AFTER INFOLATLNG CHANGES THEIR VALUE, SO I CAN GET CITY NAME  */
	useEffect(function () {
		if (infoLatLng.isFulfilled) {
			const { city } = infoLatLng.data.results[0].components;
			doSearch(undefined, city);
		}
	}, [infoLatLng])

	/** SAVE CITY NAME ON LOCAL STORAGE EVERYTIME THAT WEATHER UPDATESS */
	useEffect(function () {
		if (weather.isFulfilled) {
			saveOnLocalStorage(value);
		}
	}, [weather])

	function doSearch(e, searchValue) {
		if (e && e.which === 13 || e && e.keyCode === 13 || e && e.target.tagName === 'BUTTON' && e.target.innerText === 'Get') {
			if (searchValue) {
				getWeather(searchValue)
			}
		} else if(e && e.target.tagName === 'SPAN' || e === undefined) {
			if (searchValue) {
				setValue(searchValue)
				getWeather(searchValue)
			}
		}
	}

	function removeSaved(e, item) {
		let _savedItems = savedItems.filter(savedItem => savedItem !== item);

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

	function showSavedItems() {
		if (savedItems.length > 0) {
			return (
				<StyledSearchBoxSavedList>
					{savedItems.map(item => (
						<Tag text={item} onClick={e => doSearch(e, item)} onRemove={(e, text) => removeSaved(e, text)} key={uuidv4()} />
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
		</Fragment>
	);
}

export default connect(
	store => ({
		weather: store.weather,
		infoLatLng: store.infoLatLng
	}),
	actions
)(SearchBox);