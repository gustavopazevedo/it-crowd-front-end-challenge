import React from 'react';
import styled from '@emotion/styled';

/** COMPONENTS */
import Layout from './components/Layout';
import Container from './components/Container';
import SearchBox from './components/SearchBox';
/** COMPONENTS */

/** STYLED */
const StyledWeatherSection = styled.section`
	width: 100%;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
`;

const StyledWeatherSectionTitle = styled.h1`
	width: 100%;
	color: rgba(255, 255, 255, 0.25);
	font-size: 4rem;
	margin: 0;
	font-weight: 600;
	margin-bottom: 10px;

	span {
		font-weight: 400;
	}
`;
/** END STYLED */

function App() {
	return (
		<Layout>
			<StyledWeatherSection>
				<Container>
					<StyledWeatherSectionTitle>
						<span>GetYour</span>Weather
					</StyledWeatherSectionTitle>
					<SearchBox />
				</Container>
			</StyledWeatherSection>
		</Layout>
	);
}

export default App;
