/* eslint-disable @typescript-eslint/ban-types */
import { TextField } from '@material-ui/core';
import Autocomplete, {
	AutocompleteRenderInputParams
} from '@material-ui/lab/Autocomplete';
import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../api/api';
import { Food } from '../models/models';
import { addFood, GeneralState } from '../store/slice';

const FoodSearch = (): React.ReactElement => {
	const dispatch = useDispatch();
	const { foods } = useSelector(GeneralState);

	const [options, setOptions] = useState<Food[]>([]);
	const [selection, setSelection] = useState<Food | null>(null);

	// not working yet
	const filterOptions = (unfilteredOptions: Food[]): Food[] => {
		return unfilteredOptions.filter((u) => {
			if (!foods || !foods?.length) {
				return true;
			}

			return !foods.map((f) => f.fdcId).includes(u.fdcId);
		});
	};

	const handleInputChange = (
		{ type }: ChangeEvent<{}>,
		value: string
	): void => {
		// only search on change events; do not trigger search when selection is made
		if (value?.trim().length > 2 && type === 'change') {
			search(value.toLowerCase()).then((response) => {
				setOptions(filterOptions(response.data.foods));
			});
		}
	};

	const handleChange = (
		_event: ChangeEvent<{}>,
		value: Food | null
	): void => {
		if (value) {
			dispatch(addFood(value as Food));
			setOptions([]);
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
