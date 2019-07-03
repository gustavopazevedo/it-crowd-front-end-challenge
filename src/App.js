import React, { useEffect } from 'react';
import { connect } from 'react-redux';

/** ACTIONS */
import actions from "./actions";
/** END ACTIONS */

/** COMPONENTS */
import Layout from './components/Layout';
/** COMPONENTS */

function App({ getWeather, weather }) {
	useEffect(function() {
		getWeather('London');
	}, [])

	return (
		<Layout>
		</Layout>
	);
}

export default connect(
	store => ({
		weather: store.weather
	}),
	actions
)(App);
