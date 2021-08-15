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

const useStyles = makeStyles({
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		marginTop: '42px'
	},
	search: {
		marginRight: '2rem'
	}
});

const Home = (): React.ReactElement => {
	const styles = useStyles();

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Container className={styles.container}>
					<div className={styles.search}>
						<FoodSearch />
						<FoodList />
					</div>
					<FoodTable />
				</Container>
			</ThemeProvider>
		</>
	);
};

export default Home;
