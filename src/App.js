import React from 'react';
import { connect } from 'react-redux';

/** ACTIONS */
import actions from "./actions";
/** END ACTIONS */

/** COMPONENTS */
import Layout from './components/Layout';
/** COMPONENTS */

function App({ weather }) {
	return (
		<Layout>
			{JSON.stringify(weather)}
		</Layout>
	);
}

export default connect(
	store => ({
		weather: store.weather
	}),
	actions
)(App);
