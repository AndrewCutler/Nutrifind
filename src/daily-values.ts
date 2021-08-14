import { INutrient } from './models/models';

const dailyValues: INutrient[] = [
    {
        nutrientName: 'Calcium',
        value: 1300,
        unitName: 'mg',
        nutrientId: 1087
    }
];

export const hasRdv = (nutrient: INutrient): boolean => dailyValues.find((n) => n.nutrientId === nutrient.nutrientId) !== undefined;
