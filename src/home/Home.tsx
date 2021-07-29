import { Container, CssBaseline } from '@material-ui/core';
import React from 'react';
import FoodSearch from '../food-search/FoodSearch';

const Home = (): React.ReactElement => {
	return (
		<>
			<CssBaseline />
			<Container>
				<FoodSearch />
			</Container>
		</>
	);
};

export default Home;
