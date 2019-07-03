import axios from 'axios';

/** ACTION TYPES */
import actionTypes from './actionTypes';
const { GET_WEATHER_PENDING, GET_WEATHER_FULFILLED, GET_WEATHER_REJECTED } = actionTypes;
/** END ACTION TYPES */

function getWeather(city) {
	const APP_ID = process.env.REACT_APP_OPEN_WEATHER_APP_ID;
	const API_URL = process.env.REACT_APP_OPEN_WEATHER_API_URL;

	return async dispatch => {
		dispatch({
			type: GET_WEATHER_PENDING
		})

		try {
			const { data } = await axios.get(`${API_URL}?q=${city}&appid=${APP_ID}`);

			dispatch({
				type: GET_WEATHER_FULFILLED,
				payload: data
			})
		} catch (err) {
			dispatch({
				type: GET_WEATHER_REJECTED,
				payload: err
			})
		}
	}
}

export default getWeather;