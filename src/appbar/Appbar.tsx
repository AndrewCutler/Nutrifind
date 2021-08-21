import { AppBar, Toolbar, Typography, useTheme } from '@material-ui/core';
import React, { ReactElement } from 'react';
import SharePopover from '../share-popover/SharePopover';
import InfoPopover from '../info-popover/InfoPopover';

const Appbar = (): ReactElement => {
	const theme = useTheme();

	return (
		<AppBar
			color='primary'
			position='static'
			style={{
				marginBottom: theme.spacing(4),
				color: theme.palette.common.black
			}}
		>
			<Toolbar>
				<Typography variant='h6' style={{ flexGrow: 1 }}>
					Nutrifind
				</Typography>

				<div>
					<SharePopover />
					<InfoPopover />
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Appbar;
