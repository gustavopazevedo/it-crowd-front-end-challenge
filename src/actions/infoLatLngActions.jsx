import axios from 'axios';

/** ACTION TYPES */
import actionTypes from './actionTypes';
const { GET_INFO_LAT_LNG_PENDING, GET_INFO_LAT_LNG_FULFILLED, GET_INFO_LAT_LNG_REJECTED } = actionTypes;
/** END ACTION TYPES */

function getInfoLatLng(lat, lng) {
	const API_URL = process.env.REACT_APP_OPEN_CAGE_API;
	const API_KEY = process.env.REACT_APP_OPEN_CAGE_API_KEY;

	return async dispatch => {
		dispatch({
			type: GET_INFO_LAT_LNG_PENDING
		})

		try {
			const { data } = await axios.get(`${API_URL}/json?q=${lat}+${lng}&key=${API_KEY}`);

			dispatch({
				type: GET_INFO_LAT_LNG_FULFILLED,
				payload: data
			})
		} catch (err) {
			dispatch({
				type: GET_INFO_LAT_LNG_REJECTED,
				payload: err
			})
		}
	}
}

export default getInfoLatLng;