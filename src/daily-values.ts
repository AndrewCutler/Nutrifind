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
        nutrientName: 'sodium',
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
    '1003': {
        nutrientName: 'protein',
        unitName: 'g',
        nutrientId: 1003,
        value: 50
    },
    '1089': {
        nutrientName: 'iron',
        unitName: 'mg',
        nutrientId: 1089,
        value: 18
    },
    '1106': {
        nutrientName: 'vitamin A',
        unitName: 'mcg',
        nutrientId: 1106,
        value: 900
    },
    '1109': {
        nutrientName: 'vitamin E',
        unitName: 'mg',
        nutrientId: 1109,
        value: 15
    },
    '1165': {
        nutrientName: 'thiamin',
        unitName: 'mg',
        nutrientId: 1165,
        value: 1.2
    },
    '1166': {
        nutrientName: 'riboflavin',
        unitName: 'mg',
        nutrientId: 1166,
        value: 1.3
    },
    '1167': {
        nutrientName: 'niacin',
        unitName: 'mg',
        nutrientId: 1167,
        value: 16
    },
    '1175': {
        nutrientName: 'vitamin B6',
        unitName: 'mg',
        nutrientId: 1175,
        value: 1.7
    },
    '1177': {
        nutrientName: 'folate',
        unitName: 'mcg',
        nutrientId: 1177,
        value: 400
    },
    '1178': {
        nutrientName: 'vitamin B12',
        unitName: 'mcg',
        nutrientId: 1178,
        value: 2.4
    },
    '1180': {
        nutrientName: 'choline',
        unitName: 'mg',
        nutrientId: 1180,
        value: 550
    },
};

export const hasRdv = (nutrient: INutrient): boolean => Boolean(dailyValuesDictionary[nutrient.nutrientId.toString()]);

export const getPercentageOfRdv = (nutrient: INutrient): number => {
    const dailyValue = dailyValuesDictionary[nutrient.nutrientId.toString()];

    if (!dailyValue || !dailyValue.value || !nutrient.value) {
        console.error(`Nutrient data not found for ${nutrient.nutrientName}.`);

        return 0;
    }

    if (dailyValue.unitName.toLowerCase() !== nutrient.unitName.toLowerCase()) {
        console.log(`Units do not correspond for ${nutrient.nutrientName}. Data may be inaccurate.`);
    }

    return (nutrient.value / dailyValue.value) * 100;
}

