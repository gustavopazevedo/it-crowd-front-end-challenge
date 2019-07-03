/** ACTION TYPES */
import actionTypes from './../actions/actionTypes';
const { GET_WEATHER_PENDING, GET_WEATHER_FULFILLED, GET_WEATHER_REJECTED } = actionTypes;
/** END ACTION TYPES */

/** INITIAL STATE */
const initialState = {
	isPending: false,
	isFulfilled: false,
	isRejected: false,
	data: []
};
/** END INITIAL STATE */

const weatherReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_WEATHER_PENDING:
			return {
				...state,
				isPending: true
			};

		case GET_WEATHER_FULFILLED:
			return {
				...state,
				isPending: false,
				isFulfilled: true,
				data: payload
			};

		case GET_WEATHER_REJECTED:
			return {
				...state,
				isPending: false,
				isRejected: true,
				data: payload
			};

		default:
			return state;
	}
};

export default weatherReducer;
