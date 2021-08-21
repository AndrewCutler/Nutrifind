import {
	AppBar,
	Popover,
	Toolbar,
	Typography,
	useTheme
} from '@material-ui/core';
import React, { ReactElement } from 'react';

import ShareIcon from '@material-ui/icons/Share';
import { generateUrl } from '../api/api';
import { useSelector } from 'react-redux';
import { GeneralState } from '../store/slice';

const Appbar = (): ReactElement => {
	const theme = useTheme();
	const { foods, selectedNutrients } = useSelector(GeneralState);
	const [anchorEl, setAnchorEl] = React.useState(null);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleShareClick = ({ currentTarget }: any): void => {
		const url = generateUrl(foods, selectedNutrients);
		navigator.clipboard.writeText(url);
		setAnchorEl(currentTarget);
	};

	const handlePopoverClose = (): void => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	return (
		<AppBar
			color='secondary'
			position='static'
			style={{ marginBottom: 24, color: theme.palette.common.black }}
		>
			<Toolbar
				style={{ display: 'flex', justifyContent: 'space-between' }}
			>
				<Typography variant='h6'>Nutrifind</Typography>

				<ShareIcon
					style={{ cursor: 'pointer' }}
					onClick={handleShareClick}
				/>
				<Popover
					open={open}
					anchorEl={anchorEl}
					onClose={handlePopoverClose}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center'
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'center'
					}}
				>
					<Typography>
						Shareable link copied to the clipboard.
					</Typography>
				</Popover>
			</Toolbar>
		</AppBar>
	);
};

export default Appbar;
