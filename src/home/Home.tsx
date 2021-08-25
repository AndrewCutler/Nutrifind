import {
	Card,
	CardContent,
	Collapse,
	Container,
	createStyles,
	makeStyles,
	Theme
} from '@material-ui/core';
import React from 'react';
import FoodList from '../food-list/FoodList';
import FoodSearch from '../food-search/FoodSearch';
import FoodTable from '../food-table/FoodTable';
import { useSelector } from 'react-redux';
import { GeneralState } from '../store/slice';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		content: {
			display: 'flex',
			justifyContent: 'space-between',
			[theme.breakpoints.down('sm')]: {
				flexDirection: 'column'
			},
			[theme.breakpoints.up('md')]: {
				flexDirection: 'row'
			}
		},
		searchCard: {
			backgroundColor: theme.palette.primary.light,
			[theme.breakpoints.down('sm')]: {
				marginBottom: '2rem'
			},
			[theme.breakpoints.up('md')]: {
				marginRight: '2rem'
			}
		},
		info: {
			fontSize: '0.7rem',
			marginTop: '1rem'
		}
	})
);

const Home = (): React.ReactElement => {
	const { expanded } = useSelector(GeneralState);
	const classes = useStyles();

	return (
		<Container>
			<div className={classes.content}>
				<Card className={classes.searchCard}>
					<CardContent>
						<FoodSearch />
						<Collapse in={expanded}>
							<FoodList />
						</Collapse>
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
				. Created by{' '}
				<a href='http://andrewcutler.info'>Andrew Cutler</a>.
			</div>
		</Container>
	);
};

export default Home;
