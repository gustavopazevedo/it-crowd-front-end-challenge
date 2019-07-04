import React from 'react';

/** COMPONENTS */
import Layout from './components/Layout';
import MapWrapper from './components/MapWrapper';
import Sidebar from './components/Sidebar';
/** COMPONENTS */

/** STYLED */

/** END STYLED */

function App() {
	return (
		<Layout>
			<Sidebar />
			<MapWrapper />
		</Layout>
	);
}

export default App;
