import { Container, CssBaseline } from '@material-ui/core';
import React from 'react';
import FoodList from '../food-list/FoodList';
import FoodSearch from '../food-search/FoodSearch';

const Home = (): React.ReactElement => {
	return (
		<>
			<CssBaseline />
			<Container>
				<FoodSearch />
				<FoodList />
			</Container>
		</>
	);
};

export default Home;
