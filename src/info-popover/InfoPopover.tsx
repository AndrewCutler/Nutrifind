import { Popover, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { popoverStyles } from '../utility/constants';

const InfoPopover = (): ReactElement => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const classes = popoverStyles();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleClick = ({ currentTarget }: any): void => {
		setAnchorEl(currentTarget);
	};

	const handleClose = (): void => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	return (
		<>
			<HelpOutlineIcon
				style={{
					cursor: 'pointer'
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
					{
						// eslint-disable-next-line quotes
						"Selected foods and their relevant nutrient contents will be displayed in the table below, with each nutrient's percentage of recommended daily value determining its background color: the redder the background, the higher the percentage of that nutrient."
					}
				</Typography>
			</Popover>
		</>
	);
};

export default InfoPopover;
