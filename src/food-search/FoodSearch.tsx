import { TextField } from '@material-ui/core';
import React from 'react';

const FoodSearch = (): React.ReactElement => {
	const handleChange = ({ target: { value } }: any): void => {
		console.log(value);
	};

	return <TextField onChange={handleChange} />;
};

export default FoodSearch;
