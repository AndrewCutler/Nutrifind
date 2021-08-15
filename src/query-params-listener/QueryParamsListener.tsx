import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
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

		if (nutrientIds?.length || fdcIds?.length) {
			console.log('Retrieving data...');
		} else {
			dispatch(setLoading(false));
		}
	}, []);

	return <></>;
};

export default QueryParamsListener;
