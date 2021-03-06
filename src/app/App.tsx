import { createTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import { green, brown } from '@material-ui/core/colors';
import React, { ReactElement } from 'react';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../home/Home';
import QueryParamsListener from '../query-params-listener/QueryParamsListener';
import { GeneralState } from '../store/slice';
import Appbar from '../appbar/Appbar';
import AdUnit from '../ad-unit/AdUnit';

const theme = createTheme({
	palette: {
		primary: {
			main: brown[400]
		},
		secondary: {
			main: green[300]
		},
		background: {
			default: '#e2d5d0'
		}
	}
});

const App = (): ReactElement => {
	const { loading } = useSelector(GeneralState);

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<CssBaseline />
				<Appbar />
				{loading ? (
					<div style={{ position: 'fixed', left: '50%', top: '50%' }}>
						<Loader
							type='Rings'
							height={100}
							width={100}
							color={theme.palette.secondary.dark}
						/>
					</div>
				) : (
					<>
						<div
							style={{
								marginBottom: theme.spacing(1),
								marginTop: theme.spacing(1),
								paddingLeft: theme.spacing(1),
								fontSize: '0.8rem'
							}}
						>
							<a href='http://andrewcutler.info'>Andrew Cutler</a>{' '}
							&gt; <a href='/'>Nutrifind</a>
						</div>
						<Home />
					</>
				)}
				<QueryParamsListener />
				<AdUnit />
			</Router>
		</ThemeProvider>
	);
};

export default App;
