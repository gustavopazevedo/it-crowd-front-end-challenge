import { combineReducers } from 'redux';

/** REDUCERS */
import weatherReducer from './weatherReducer';
import infoLatLngReducer from './infoLatLngReducer';
/** END REDUCERS */

export default combineReducers({
	weather: weatherReducer,
	infoLatLng: infoLatLngReducer
})