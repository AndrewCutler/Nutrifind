import { Popover, Typography, useTheme } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { generateUrl } from '../api/api';
import ShareIcon from '@material-ui/icons/Share';
import { GeneralState } from '../store/slice';
import { popoverStyles } from '../utility/constants';

const SharePopover = (): ReactElement => {
	const theme = useTheme();
	const { foods, selectedNutrients } = useSelector(GeneralState);
	const classes = popoverStyles();

	const [anchorEl, setAnchorEl] = React.useState(null);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleClick = ({ currentTarget }: any): void => {
		const url = generateUrl(foods, selectedNutrients);
		navigator.clipboard.writeText(url);
		setAnchorEl(currentTarget);
	};

	const handleClose = (): void => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	return (
		<>
			<ShareIcon
				style={{
					cursor: 'pointer',
					marginRight: theme.spacing(2)
				}}
				onClick={handleClick}
			/>
			<Popover
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
			>
				<Typography className={classes.root}>
					Shareable link copied to the clipboard.
				</Typography>
			</Popover>
		</>
	);
};

export default SharePopover;
