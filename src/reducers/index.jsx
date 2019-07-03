import { combineReducers } from 'redux';

/** REDUCERS */
import weatherReducer from './weatherReducer';
/** END REDUCERS */

const reducers = combineReducers({
	weather: weatherReducer
})

export default reducers;