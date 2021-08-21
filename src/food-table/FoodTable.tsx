import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	useTheme,
	withStyles
} from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { hasRdv } from '../utility/daily-values';
import { GeneralState } from '../store/slice';
import FoodRow from './FoodRow';

const FoodTable = (): ReactElement => {
	const { foods, selectedNutrients, rdvOnly } = useSelector(GeneralState);
	const theme = useTheme();

	const TableHeaderCell = withStyles((theme) => ({
		body: {
			color: theme.palette.secondary.main
		}
	}))(TableCell);

	return (
		<>
			{foods?.length > 0 && (
				<>
					<TableContainer
						style={{
							border: `1px solid ${theme.palette.primary.light}`,
							alignSelf: 'baseline'
						}}
					>
						<Table>
							<TableBody>
								<TableRow
									style={{
										backgroundColor:
											theme.palette.primary.dark
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
				</>
			)}
		</>
	);
};

export default FoodTable;
