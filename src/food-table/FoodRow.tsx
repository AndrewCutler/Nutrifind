import { TableRow, TableCell } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { IFood, INutrient } from '../models/models';
import NutrientCell from './NutrientCell';

interface IFoodRowProps {
	food: IFood;
	nutrients: INutrient[];
}

const FoodRow = ({ food, nutrients }: IFoodRowProps): ReactElement => {
	return (
		<TableRow>
			<TableCell>{food.description}</TableCell>
			{nutrients?.map((n) => {
				return (
					<NutrientCell
						key={`${food.fdcId}-${n.nutrientId}`}
						food={food}
						nutrient={n}
					/>
				);
			})}
		</TableRow>
	);
};

export default FoodRow;
