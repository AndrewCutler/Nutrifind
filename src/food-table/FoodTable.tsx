import {
	Popover,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Typography,
	useTheme,
	withStyles
} from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { hasRdv } from '../daily-values';
import { GeneralState } from '../store/slice';
import ShareIcon from '@material-ui/icons/Share';
import FoodRow from './FoodRow';
import { generateUrl } from '../api/api';

const FoodTable = (): ReactElement => {
	const { foods, selectedNutrients, rdvOnly } = useSelector(GeneralState);
	const theme = useTheme();

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

	const TableHeaderCell = withStyles((theme) => ({
		body: {
			color: theme.palette.primary.dark,
			fontWeight: 700
		}
	}))(TableCell);

	const open = Boolean(anchorEl);

	return (
		<>
			{foods?.length > 0 && (
				<>
					<TableContainer
						style={{
							border: `1px solid ${theme.palette.secondary.light}`,
							alignSelf: 'baseline'
						}}
					>
						<Table>
							<TableBody>
								<TableRow
									style={{
										backgroundColor:
											theme.palette.secondary.dark
									}}
								>
									<TableHeaderCell>Food</TableHeaderCell>
									{selectedNutrients?.length > 0 ? (
										selectedNutrients
											.filter(
												(n) => !rdvOnly || hasRdv(n)
											)
											.map((n) => {
												return (
													<TableHeaderCell
														key={n.nutrientId}
													>
														{n.nutrientName}
													</TableHeaderCell>
												);
											})
									) : (
										<TableHeaderCell>
											No nutrients selected
										</TableHeaderCell>
									)}
								</TableRow>
								{foods?.map((f) => {
									return (
										<FoodRow
											key={f.fdcId}
											food={f}
											nutrients={selectedNutrients.filter(
												(n) => !rdvOnly || hasRdv(n)
											)}
										/>
									);
								})}
							</TableBody>
						</Table>
					</TableContainer>
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
				</>
			)}
		</>
	);
};

export default FoodTable;
