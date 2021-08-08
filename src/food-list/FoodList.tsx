import {
	Checkbox,
	Collapse,
	ListItemIcon,
	ListItemText,
	useTheme
} from '@material-ui/core';
import { List, ListItem } from '@material-ui/core';
import React, { ChangeEvent, MouseEventHandler, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Food, Nutrient } from '../models/models';
import { addNutrient, GeneralState, removeNutrient } from '../store/slice';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useState } from 'react';
import { useEffect } from 'react';

const FoodList = (): ReactElement => {
	const theme = useTheme();
	const dispatch = useDispatch();

	const [expandedFoods, setExpandedFoods] = useState<number[]>([]);
	const { foods, selectedNutrients } = useSelector(GeneralState);

	const handleClick = (fdcId: number): void => {
		if (expandedFoods.includes(fdcId)) {
			setExpandedFoods([...expandedFoods.filter((f) => f !== fdcId)]);
		} else {
			setExpandedFoods([...expandedFoods, fdcId]);
		}
	};

	const isExpanded = (fdcId: number): boolean => {
		return expandedFoods.includes(fdcId);
	};

	const isNutrientIncluded = (nutrientId: number): boolean => {
		return selectedNutrients.map((n) => n.nutrientId).includes(nutrientId);
	};

	const toggleNutrientSelection = (
		checked: boolean,
		nutrient: Nutrient
	): void => {
		console.log(checked, nutrient);
		if (checked) {
			dispatch(addNutrient(nutrient));
		} else {
			dispatch(removeNutrient(nutrient));
		}
	};

	return (
		<List>
			{foods?.map((f) => {
				return (
					<div
						key={f.fdcId}
						style={{
							border: `1px solid ${theme.palette.grey[200]}`,
							borderRadius: '2px'
						}}
					>
						<ListItem button onClick={() => handleClick(f.fdcId)}>
							<ListItemIcon>delete</ListItemIcon>
							<ListItemText primary={f.description} />
							{isExpanded(f.fdcId) ? (
								<ExpandLess />
							) : (
								<ExpandMore />
							)}
						</ListItem>
						<Collapse
							in={isExpanded(f.fdcId)}
							timeout='auto'
							style={{
								maxHeight: '33vh',
								overflowY: 'auto'
							}}
							unmountOnExit
						>
							<List dense>
								{f.foodNutrients.map((n) => {
									return (
										<ListItem
											button
											style={{
												paddingLeft: '4rem',
												border: `1px solid ${theme.palette.grey[300]}`
											}}
											key={n.nutrientId}
										>
											<Checkbox
												checked={isNutrientIncluded(
													n.nutrientId
												)}
												onChange={(_event, value) =>
													toggleNutrientSelection(
														value,
														n
													)
												}
												color='primary'
											/>
											<ListItemText
												style={{ marginLeft: '3rem' }}
												primary={n.nutrientName}
												secondary={`${n.value} ${n.unitName}`}
											/>
										</ListItem>
									);
								})}
							</List>
						</Collapse>
					</div>
				);
			})}
		</List>
	);
};

export default FoodList;
