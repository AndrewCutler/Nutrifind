import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getFoodsByFdcIds } from '../api/api';
import { IFood, IFoodGetResponse, INutrient } from '../models/models';
import { addFood, addNutrient, setLoading } from '../store/slice';

const QueryParamsListener = (): ReactElement => {
	const dispatch = useDispatch();
	const location = useLocation();

	useEffect(() => {
		const nutrientIds: string[] = new URLSearchParams(
			location.search
		).getAll('n');
		const fdcIds: string[] = new URLSearchParams(location.search).getAll(
			'f'
		);

		if (!fdcIds?.length && !nutrientIds?.length) {
			dispatch(setLoading(false));
		} else {
			console.log('Retrieving food data...');
			getFoodsByFdcIds(fdcIds).then((res) => {
				const foods = res.data as IFoodGetResponse[];
				console.log(foods);
				foods.forEach((f) => {
					const food = {
						description: f.description,
						fdcId: f.fdcId,
						foodNutrients: f.foodNutrients.map((n) => {
							return {
								nutrientId: n.nutrient.id,
								nutrientName: n.nutrient.name,
								unitName: n.nutrient.unitName,
								value: n.amount
							} as INutrient;
						})
					} as IFood;

					dispatch(addFood(food));

					f.foodNutrients.forEach((n) => {
						if (nutrientIds.includes(n.nutrient.id.toString())) {
							const nutrient: INutrient = {
								nutrientId: n.nutrient.id,
								unitName: n.nutrient.unitName,
								nutrientName: n.nutrient.name
							};
							dispatch(addNutrient(nutrient));
						}
					});
				});
				dispatch(setLoading(false));
			});
		}
	}, []);

	return <></>;
};

export default QueryParamsListener;
