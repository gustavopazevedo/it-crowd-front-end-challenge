import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

/** STYLED */
const StyledMapWrapper = styled.div`
    width: calc(100% - 30px);
    height: calc(100vh - 30px);
    position: relative;
	display: block;
	padding: 15px;
`;
/** END STYLED */

function MapWrapper({ google, weather }) {
	const [latLng, setLatLng] = useState(null);

	useEffect(function() {
		if (weather.isFulfilled) {
			const { lat, lon } = weather.data.coord;

			setLatLng({ lat: lat, lng: lon })
		}
	}, [weather])


	if (latLng) {
		return (
			<StyledMapWrapper>
				<Map google={google} zoom={12} initialCenter={latLng} center={latLng}>
					<Marker position={latLng} />
				</Map>
			</StyledMapWrapper>
		)
	}

	return false
}

export default compose(
	connect(
		store => ({
			weather: store.weather
		})
	),
	GoogleApiWrapper({
		apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_key
	}),
)(MapWrapper)