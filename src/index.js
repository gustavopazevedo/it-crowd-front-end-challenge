import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

/** CONFIGURE STORE */
import configureStore from './store/configureStore';
/** END CONFIGURE STORE */

render(
	<Provider store={configureStore()}>
		<App />
	</Provider>,
	document.getElementById('root')
);