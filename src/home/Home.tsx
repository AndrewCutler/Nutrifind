import {
	Container,
	createTheme,
	CssBaseline,
	makeStyles,
	ThemeProvider
} from '@material-ui/core';
import { green, brown } from '@material-ui/core/colors';
import React from 'react';
import FoodList from '../food-list/FoodList';
import FoodSearch from '../food-search/FoodSearch';
import FoodTable from '../food-table/FoodTable';

const theme = createTheme({
	palette: {
		primary: {
			main: green[400]
		},
		secondary: {
			main: brown[400]
		},
		background: {
			default: '#e2d5d0'
		}
	}
});

const Home = (): React.ReactElement => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Container
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						marginTop: '42px'
					}}
				>
					<div style={{ flex: '0.5' }}>
						<FoodSearch />
						<FoodList />
					</div>
					<div>
						<FoodTable />
					</div>
				</Container>
			</ThemeProvider>
		</>
	);
};

export default Home;
