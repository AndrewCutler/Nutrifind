import { TableCell } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { IFood, INutrient } from '../models/models';

interface INutrientCellProps {
	food: IFood;
	nutrient: INutrient;
}

const NutrientCell = ({ food, nutrient }: INutrientCellProps): ReactElement => {
	const getFoodNutrientCellContent = (): string => {
		const matchingNutrient: INutrient = food.foodNutrients.find(
			(foodNutrient: INutrient) =>
				foodNutrient.nutrientId === nutrient.nutrientId
		) as INutrient;

		if (matchingNutrient) {
			return `${matchingNutrient.value} ${matchingNutrient.unitName}`;
		}

		return 'No data';
	};

	return <TableCell>{getFoodNutrientCellContent()}</TableCell>;
};

export default NutrientCell;
