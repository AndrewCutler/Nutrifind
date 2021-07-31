/* eslint-disable @typescript-eslint/ban-types */
import { TextField } from '@material-ui/core';
import Autocomplete, {
	AutocompleteRenderInputParams
} from '@material-ui/lab/Autocomplete';
import React, { ChangeEvent, useState } from 'react';
import { search } from '../api/api';
import { Food } from '../models/models';

const FoodSearch = (): React.ReactElement => {
	const [options, setOptions] = useState<Food[]>([]);
	const [selection, setSelection] = useState<Food | null>(null);
	const [selections, setSelections] = useState<Food[]>([]);

	const handleInputChange = (
		_event: ChangeEvent<{}>,
		value: string
	): void => {
		if (value?.trim().length > 2) {
			search(value.toLowerCase()).then((response) => {
				console.log(response.data.foods);
				setOptions(response.data.foods);
			});
		}
	};

	const handleChange = (
		_event: ChangeEvent<{}>,
		value: Food | null
	): void => {
		if (value) {
			setSelections([...selections, value as Food]);
		}
		setSelection(null);
	};

	return (
		<Autocomplete
			options={options}
			onChange={handleChange}
			value={selection}
			blurOnSelect
			onBlur={() => setOptions([])}
			onInputChange={handleInputChange}
			getOptionLabel={(option: Food) => option.description}
			getOptionSelected={(option: Food, value: Food) =>
				option.fdcId === value.fdcId
			}
			renderInput={(params: AutocompleteRenderInputParams) => (
				<TextField
					{...params}
					label='Search for food'
					helperText='Minimum 3 characters'
				/>
			)}
		/>
	);
};

export default FoodSearch;
