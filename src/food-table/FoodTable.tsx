import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow
} from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { hasRdv } from '../daily-values';
import { GeneralState } from '../store/slice';
import FoodRow from './FoodRow';

const FoodTable = (): ReactElement => {
	const { foods, selectedNutrients, rdvOnly } = useSelector(GeneralState);

	return (
		<>
			{foods?.length > 0 && (
				<TableContainer>
					<Table>
						<TableBody>
							<TableRow>
								<TableCell>Food</TableCell>
								{selectedNutrients?.length > 0 ? (
									selectedNutrients
										.filter((n) => !rdvOnly || hasRdv(n))
										.map((n) => {
											return (
												<TableCell key={n.nutrientId}>
													{n.nutrientName}
												</TableCell>
											);
										})
								) : (
									<TableCell>No nutrients selected</TableCell>
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
			)}
		</>
	);
};

export default FoodTable;
