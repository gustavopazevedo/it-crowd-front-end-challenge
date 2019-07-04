/** ACTION TYPES */
import actionTypes from './../actions/actionTypes';
const { GET_INFO_LAT_LNG_PENDING, GET_INFO_LAT_LNG_FULFILLED, GET_INFO_LAT_LNG_REJECTED } = actionTypes;
/** END ACTION TYPES */

/** INITIAL STATE */
const initialState = {
	isPending: false,
	isFulfilled: false,
	isRejected: false,
	data: []
};
/** END INITIAL STATE */

function infoLatLngReducer(state = initialState, { type, payload }) {
	switch (type) {
		case GET_INFO_LAT_LNG_PENDING:
			return {
				...state,
				isPending: true
			};

		case GET_INFO_LAT_LNG_FULFILLED:
			return {
				...state,
				isPending: false,
				isFulfilled: true,
				data: payload
			};

		case GET_INFO_LAT_LNG_REJECTED:
			return {
				...state,
				isPending: false,
				isRejected: true,
				data: payload
			};

		default:
			return state;
	}
}

export default infoLatLngReducer;