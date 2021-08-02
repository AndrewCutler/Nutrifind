import { Collapse, ListItemIcon, ListItemText } from '@material-ui/core';
import { List, ListItem } from '@material-ui/core';
import React, { ReactElement } from 'react';
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
							{/* map on nutrients */}
							<List component='div' disablePadding>
								<ListItem
									button
									style={{ paddingLeft: '4rem' }}
								>
									<ListItemIcon>
										{/* change icon */}
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary='Starred' />
								</ListItem>
							</List>
						</Collapse>
					</>
				);
			})}
		</List>
	);
};

export default FoodList;
