import { Popover, Input, useTheme, Tooltip } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { generateUrl } from '../api/api';
import ShareIcon from '@material-ui/icons/Share';
import { GeneralState } from '../store/slice';
import { popoverStyles } from '../utility/constants';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const SharePopover = (): ReactElement => {
	const theme = useTheme();
	const { foods, selectedNutrients } = useSelector(GeneralState);
	const classes = popoverStyles();

	const [url, setUrl] = React.useState<string>('');
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [tooltipOpen, setTooltipOpen] = React.useState<boolean>(false);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleShareClick = ({ currentTarget }: any): void => {
		setUrl(generateUrl(foods, selectedNutrients));
		setAnchorEl(currentTarget);
	};

	const handleCopyClick = (): void => {
		navigator.clipboard.writeText(url);
		setTooltipOpen(true);
	};

	const handleClose = (): void => {
		setAnchorEl(null);
		handleTooltipClose();
	};

	const handleTooltipClose = () => {
		setTooltipOpen(false);
	};

	const open = Boolean(anchorEl);

	return (
		<>
			<ShareIcon
				style={{
					cursor: 'pointer',
					marginRight: theme.spacing(2)
				}}
				onClick={handleShareClick}
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
				<div className={classes.root}>
					<Input value={url} />
					<Tooltip
						style={{ marginLeft: 8, cursor: 'pointer' }}
						title='Link copied'
						disableFocusListener
						disableHoverListener
						disableTouchListener
						open={tooltipOpen}
						onClose={handleTooltipClose}
					>
						<FileCopyIcon
							fontSize='small'
							onClick={handleCopyClick}
						/>
					</Tooltip>
				</div>
			</Popover>
		</>
	);
};

export default SharePopover;
