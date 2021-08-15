import { createTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import { green, brown } from '@material-ui/core/colors';
import React, { ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../home/Home';

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
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<CssBaseline />
				<Home />
			</Router>
		</ThemeProvider>
	);
};

export default App;
