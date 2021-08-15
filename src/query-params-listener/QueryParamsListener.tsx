import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getFoodsByFdcIds } from '../api/api';
import { setLoading } from '../store/slice';

const QueryParamsListener = (): ReactElement => {
	const dispatch = useDispatch();
	const location = useLocation();

	useEffect(() => {
		const nutrientIds: string[] = new URLSearchParams(
			location.search
		).getAll('nutrientId');
		const fdcIds: string[] = new URLSearchParams(location.search).getAll(
			'fdcId'
		);

		console.log(nutrientIds, fdcIds);
		if (!fdcIds?.length && !nutrientIds?.length) {
			dispatch(setLoading(false));
		} else {
			console.log('Retrieving food data...');
			getFoodsByFdcIds(fdcIds).then((res) => {
				console.log(res);
			});
			// dispatch(setLoading(false));
		}
	}, []);

	return <></>;
};

export default QueryParamsListener;
