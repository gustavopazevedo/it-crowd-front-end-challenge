import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

/** STYLED */
const StyledMapWrapper = styled.div`
    width: calc(100% - 30px);
    height: calc(100vh - 30px);
    position: relative;
	padding: 15px;

	${props => !props.map && css`
			padding: 0;
			display: flex;
			justify-content: center;
			align-items: center;
		`
	}
`;

const StyledMapWrapperText = styled.p`
	color: #fff;
	font-size: 2.4rem;
	line-height: 3.2rem;
	text-align: center;
`;
/** END STYLED */

function MapWrapper({ google, weather }) {
	const [latLng, setLatLng] = useState(null);

	useEffect(function () {
		if (weather.isFulfilled) {
			const { lat, lon } = weather.data.coord;

			setLatLng({ lat: lat, lng: lon })
		}
	}, [weather])


	if (latLng) {
		const mapStyles = {
			width: '100%',
			height: '100%',
			padding: '15px'
		}

		return (
			<StyledMapWrapper map={true}>
				<Map style={mapStyles} google={google} zoom={12} initialCenter={latLng} center={latLng}>
					<Marker position={latLng} />
				</Map>
			</StyledMapWrapper>
		)
	}

	return (
		<StyledMapWrapper>
			<StyledMapWrapperText>
				Type a <strong>City</strong> in the search box an press <strong>Get</strong>. <br />If you have <strong>Saved items</strong> you can click in one of these items.
			</StyledMapWrapperText>
		</StyledMapWrapper>
	)
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