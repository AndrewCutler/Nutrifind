import { TableCell } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { Food, Nutrient } from '../models/models';

interface INutrientCellProps {
	food: Food;
	nutrient: Nutrient;
}

const NutrientCell = ({ food, nutrient }: INutrientCellProps): ReactElement => {
	const getFoodNutrientCellContent = (): string => {
		const matchingNutrient: Nutrient = food.foodNutrients.find(
			(foodNutrient: Nutrient) =>
				foodNutrient.nutrientId === nutrient.nutrientId
		) as Nutrient;

		if (matchingNutrient) {
			return `${matchingNutrient.value} ${matchingNutrient.unitName}`;
		}

		return 'No data';
	};

	return <TableCell>{getFoodNutrientCellContent()}</TableCell>;
};

export default NutrientCell;
