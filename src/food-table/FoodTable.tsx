import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow
} from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Nutrient } from '../models/models';
import { GeneralState } from '../store/slice';
import FoodRow from './FoodRow';
import NutrientCell from './NutrientCell';

const FoodTable = (): ReactElement => {
	const { foods, selectedNutrients } = useSelector(GeneralState);

	const getFoodNutrientCellContent = (
		foodNutrients: Nutrient[],
		nutrientId: number
	): string => {
		const nutrient = foodNutrients.find(
			(foodNutrient: Nutrient) => foodNutrient.nutrientId === nutrientId
		);

		if (nutrient) {
			return `${nutrient.value} ${nutrient.unitName}`;
		}

		return 'No data';
	};

	return (
		<>
			{foods?.length > 0 && (
				<TableContainer>
					<Table>
						<TableBody>
							<TableRow>
								<TableCell>Food</TableCell>
								{selectedNutrients?.length > 0 ? (
									selectedNutrients.map((n) => {
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
										nutrients={selectedNutrients}
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
