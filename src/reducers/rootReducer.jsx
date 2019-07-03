import { combineReducers } from 'redux';

/** REDUCERS */
import weatherReducer from './weatherReducer';
/** END REDUCERS */

export default combineReducers({
	weather: weatherReducer
})