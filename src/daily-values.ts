import { INutrient } from './models/models';

const dailyValues: INutrient[] = [
    {
        nutrientName: 'Calcium',
        value: 1300,
        unitName: 'mg',
        nutrientId: 1087
    },
];

const dailyValuesDictionary: { [key: string]: INutrient } = {
    '1087': {
        nutrientName: 'Calcium',
        value: 1300,
        unitName: 'mg',
        nutrientId: 1087
    },
    '1079': {
        nutrientName: 'Fiber, total dietary',
        unitName: 'g',
        nutrientId: 1079,
        value: 28
    },
    '1004': {
        nutrientName: 'fat',
        unitName: 'g',
        nutrientId: 1004,
        value: 65
    },
    '1090': {
        nutrientName: 'magnesium',
        unitName: 'mg',
        nutrientId: 1090,
        value: 420
    },
    // yet to find any foods with data on this
    '-1': {
        nutrientName: 'manganese',
        unitName: 'mg',
        nutrientId: -1,
        value: 2.3
    },
    '1091': {
        nutrientName: 'phosphorus',
        unitName: 'mg',
        nutrientId: 1091,
        value: 1250
    },
    '1092': {
        nutrientName: 'potassium',
        unitName: 'mg',
        nutrientId: 1092,
        value: 4700
    },
    '1162': {
        nutrientName: 'vitamin C',
        unitName: 'mg',
        nutrientId: 1162,
        value: 90
    },
    '1114': {
        nutrientName: 'vitamin D',
        unitName: 'mcg',
        nutrientId: 1114,
        value: 20
    },
    '1185': {
        nutrientName: 'vitamin K',
        unitName: 'mcg',
        nutrientId: 1185,
        value: 120
    },
    // cannot find yet
    '-2': {
        nutrientName: 'biotin',
        unitName: 'mcg',
        nutrientId: -2,
        value: 30
    },
    '1098': {
        nutrientName: 'copper',
        unitName: 'mcg',
        nutrientId: 1098,
        value: 0.9
    },
    '1103': {
        nutrientName: 'selenium',
        unitName: 'mcg',
        nutrientId: 1103,
        value: 55
    },
    '1093': {
        nutrientName: 'selenium',
        unitName: 'mg',
        nutrientId: 1093,
        value: 2300
    },
    '1095': {
        nutrientName: 'zinc',
        unitName: 'mg',
        nutrientId: 1095,
        value: 11
    },
};

export const hasRdv = (nutrient: INutrient): boolean => Boolean(dailyValuesDictionary[nutrient.nutrientId.toString()]);

