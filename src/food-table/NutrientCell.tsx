import { TableCell } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { getPercentageOfRdv } from '../daily-values';
import { IFood, INutrient } from '../models/models';

const NutrientCell = ({ nutrient }: { nutrient: INutrient }): ReactElement => {
	const getCellBackgroundColor = (): string => {
		const percentage = getPercentageOfRdv(nutrient);

		console.log(percentage);

		return percentage.toString();
	};

	return (
		<TableCell onClick={() => getCellBackgroundColor()}>
			{nutrient.value} {nutrient.unitName}
		</TableCell>
	);
};

export default NutrientCell;
