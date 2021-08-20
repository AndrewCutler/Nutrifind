import { TableCell, withStyles } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { getPercentageOfRdv } from '../daily-values';
import { getHexBackgroundByPercentage } from '../math';
import { INutrient } from '../models/models';

const StyledTableCell = withStyles(() => ({
	head: {
		backgroundColor: '#ff4b05'
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
