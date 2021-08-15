import { TableCell, withStyles } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { getPercentageOfRdv } from '../daily-values';
import { getHexBackgroundByPercentage } from '../math';
import { IFood, INutrient } from '../models/models';

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: '#ff4b05'
		// default e2d5d0
	}
}))(TableCell);

const NutrientCell = ({ nutrient }: { nutrient: INutrient }): ReactElement => {
	const getCellBackgroundColor = (): string => {
		return getHexBackgroundByPercentage(getPercentageOfRdv(nutrient));
	};

	return (
		<StyledTableCell
			onClick={() => getCellBackgroundColor()}
			style={{ backgroundColor: getCellBackgroundColor() }}
		>
			{nutrient.value} {nutrient.unitName}
		</StyledTableCell>
	);
};

export default NutrientCell;
