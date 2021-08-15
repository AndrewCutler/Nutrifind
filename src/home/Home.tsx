import {
	Card,
	CardContent,
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
			main: green[200]
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
	content: {
		display: 'flex',
		justifyContent: 'space-between',
		marginTop: '84px'
	},
	searchCard: {
		backgroundColor: theme.palette.secondary.light,
		marginRight: '2rem'
	},
	info: {
		fontSize: '0.7rem',
		marginTop: '1rem'
	}
});

const Home = (): React.ReactElement => {
	const classes = useStyles();

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Container>
					<div className={classes.content}>
						<Card className={classes.searchCard}>
							<CardContent>
								<FoodSearch />
								<FoodList />
							</CardContent>
						</Card>
						<FoodTable />
					</div>
					<div className={classes.info}>
						All recommended daily values are based on{' '}
						<a
							target='_blank'
							rel='noreferrer'
							href='https://www.fda.gov/food/new-nutrition-facts-label/daily-value-new-nutrition-and-supplement-facts-labels#referenceguide'
						>
							FDA guidelines
						</a>
						. Food data is retrieved from the{' '}
						<a
							href='https://fdc.nal.usda.gov/api-guide.html'
							target='_blank'
							rel='noreferrer'
						>
							USDA&apos;s FoodData API
						</a>
						.
					</div>
				</Container>
			</ThemeProvider>
		</>
	);
};

export default Home;
