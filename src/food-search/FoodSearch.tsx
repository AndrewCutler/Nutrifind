import { TextField } from '@material-ui/core';
import Autocomplete, {
	AutocompleteRenderInputParams
} from '@material-ui/lab/Autocomplete';
import React, { ChangeEvent, useState } from 'react';
import { search } from '../api/api';

const FoodSearch = (): React.ReactElement => {
	const [options, setOptions] = useState([]);
	// eslint-disable-next-line @typescript-eslint/ban-types
	const handleChange = (_event: ChangeEvent<{}>, value: string): void => {
		console.log(value);
		if (value?.trim().length > 2) {
			search(value.toLowerCase()).then((response) => {
				console.log('response:', response);
				setOptions(response.data.foods);
			});
		}
	};

	// return <TextField onChange={handleChange} />;
	return (
		<Autocomplete
			options={options}
			onInputChange={handleChange}
			getOptionLabel={(option: any) => option.description}
			renderInput={(params: AutocompleteRenderInputParams) => (
				<TextField {...params} />
			)}
		/>
	);
};

export default FoodSearch;
