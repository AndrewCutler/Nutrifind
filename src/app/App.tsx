import { createTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import { green, brown } from '@material-ui/core/colors';
import React, { ReactElement } from 'react';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../home/Home';
import { GeneralState } from '../store/slice';

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

const App = (): ReactElement => {
	const { loading } = useSelector(GeneralState);

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<CssBaseline />
				{loading ? (
					<div style={{ position: 'fixed', left: '50%', top: '50%' }}>
						<Loader
							type='Rings'
							height={100}
							width={100}
							color={theme.palette.primary.dark}
						/>
					</div>
				) : (
					<Home />
				)}
			</Router>
		</ThemeProvider>
	);
};

export default App;
