import { TableCell, Tooltip, withStyles } from '@material-ui/core';
import React, { ReactElement, useState } from 'react';
import { useEffect } from 'react';
import { getPercentageOfRdv } from '../utility/daily-values';
import { getHexBackgroundByPercentage } from '../utility/math';
import { INutrient } from '../models/models';

const StyledTableCell = withStyles(() => ({
	head: {
		backgroundColor: '#ff4b05'
	}
}))(TableCell);

const NutrientCell = ({ nutrient }: { nutrient: INutrient }): ReactElement => {
	const [percent, setPercent] = useState<number>(0);
	const [backgroundColor, setBackgroundColor] = useState<string>('');

	useEffect(() => {
		const percent = getPercentageOfRdv(nutrient);
		setPercent(percent);
		setBackgroundColor(getHexBackgroundByPercentage(percent));
	}, []);

	return (
		<Tooltip title={`${percent.toPrecision(2)}% of RDV`}>
			<StyledTableCell style={{ backgroundColor }}>
				{nutrient.value} {nutrient.unitName}
			</StyledTableCell>
		</Tooltip>
	);
};

export default NutrientCell;
