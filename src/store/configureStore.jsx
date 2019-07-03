/** PACKAGES */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
/** END PACKAGES */

/** REDUCERS */
import rootReducer from './../reducers/rootReducer';
/** END REDUCERS */

function configureStore(defaultState) {
	return createStore(
		rootReducer,
		defaultState,
		applyMiddleware(thunkMiddleware)
	)
}

export default configureStore;