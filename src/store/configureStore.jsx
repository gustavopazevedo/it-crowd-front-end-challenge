/** PACKAGES */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
/** END PACKAGES */

/** REDUCERS */
import reducers from './../reducers';
/** END REDUCERS */

const configureStore = defaultState => {
	return createStore(
		reducers,
		defaultState,
		applyMiddleware(thunkMiddleware)
	)
}

export default configureStore;