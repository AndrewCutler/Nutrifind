import {
	Checkbox,
	Collapse,
	ListItemIcon,
	ListItemText
} from '@material-ui/core';
import { List, ListItem } from '@material-ui/core';
import React, { ChangeEvent, MouseEventHandler, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Food, Nutrient } from '../models/models';
import { GeneralState } from '../store/slice';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { useState } from 'react';
import { useEffect } from 'react';

const FoodList = (): ReactElement => {
	const [expandedFoods, setExpandedFoods] = useState<number[]>([]);
	// const { foods } = useSelector(GeneralState);
	const [selectedNutrients, setSelectedNutrients] = useState([
		{
			nutrientId: 10,
			nutrientName: 'potassium',
			nutrientNumber: '1',
			unitName: 'mg',
			value: 100
		} as Nutrient,
		{
			nutrientId: 20,
			nutrientName: 'calcium',
			nutrientNumber: '5',
			unitName: 'mg',
			value: 100
		} as Nutrient
	]);
	const foods: Food[] = [
		{
			description: 'banana',
			fdcId: 1,
			foodCategory: 'fruit',
			foodNutrients: [
				{
					nutrientId: 10,
					nutrientName: 'potassium',
					nutrientNumber: '1',
					unitName: 'mg',
					value: 100
				} as Nutrient,
				{
					nutrientId: 15,
					nutrientName: 'fiber',
					nutrientNumber: '2',
					unitName: 'mg',
					value: 900
				} as Nutrient
			]
		} as Food,
		{
			description: 'apple',
			fdcId: 2,
			foodCategory: 'fruit',
			foodNutrients: [
				{
					nutrientId: 10,
					nutrientName: 'potassium',
					nutrientNumber: '1',
					unitName: 'mg',
					value: 35
				} as Nutrient,
				{
					nutrientId: 15,
					nutrientName: 'fiber',
					nutrientNumber: '2',
					unitName: 'mg',
					value: 700
				} as Nutrient
			]
		} as Food
	];

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
		if (checked) {
			setSelectedNutrients([...selectedNutrients, nutrient]);
		} else {
			setSelectedNutrients([
				...selectedNutrients.filter(
					(n) => n.nutrientId !== nutrient.nutrientId
				)
			]);
		}
	};

	return (
		<List>
			{foods.map((f) => {
				return (
					<>
						<ListItem button onClick={() => handleClick(f.fdcId)}>
							<ListItemIcon></ListItemIcon>
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
							unmountOnExit
						>
							<List dense>
								{f.foodNutrients.map((n) => {
									return (
										<ListItem
											button
											style={{ paddingLeft: '4rem' }}
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
					</>
				);
			})}
		</List>
	);
};

export default FoodList;
