/* eslint-disable @typescript-eslint/ban-types */
import {
	Checkbox,
	FormControlLabel,
	IconButton,
	TextField
} from '@material-ui/core';
import Autocomplete, {
	AutocompleteRenderInputParams
} from '@material-ui/lab/Autocomplete';
import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../api/api';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { IFood } from '../models/models';
import { addFood, GeneralState, setExpanded, setRdvOnly } from '../store/slice';

const FoodSearch = (): React.ReactElement => {
	const dispatch = useDispatch();
	const { foods, rdvOnly, expanded } = useSelector(GeneralState);

	const [options, setOptions] = useState<IFood[]>([]);
	const [selection, setSelection] = useState<IFood | null>(null);

	const filterOptions = (unfilteredOptions: IFood[]): IFood[] => {
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
		value: IFood | null
	): void => {
		if (value) {
			dispatch(addFood(value as IFood));
			setOptions([]);
		}
		setSelection(null);
	};

	const handleExpandClick = (): void => {
		dispatch(setExpanded(!expanded));
	};

	return (
		<>
			<div style={{ display: 'flex' }}>
				<Autocomplete
					options={options}
					onChange={handleChange}
					style={{ flexGrow: 1 }}
					value={selection}
					blurOnSelect
					onBlur={() => setOptions([])}
					onInputChange={handleInputChange}
					getOptionLabel={(option: IFood) => option.description}
					getOptionSelected={(option: IFood, value: IFood) =>
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
				<IconButton onClick={handleExpandClick}>
					{expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
				</IconButton>
			</div>
			{expanded && (
				<FormControlLabel
					control={
						<Checkbox
							checked={rdvOnly}
							color='secondary'
							// eslint-disable-next-line @typescript-eslint/no-explicit-any
							onChange={(_: any, checked: boolean) =>
								dispatch(setRdvOnly(checked))
							}
						/>
					}
					label='Only include nutrients with recommended daily values'
				/>
			)}
		</>
	);
};

export default FoodSearch;
