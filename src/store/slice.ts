import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Food, Nutrient } from '../models/models'

interface IGeneralState {
    foods: Food[];
}

export const generalSlice = createSlice({
    name: 'general',
    initialState: {
        foods: [
            {
                description: 'banana',
                fdcId: 1,
                foodCategory: 'fruit',
                foodNutrients: [
                    { nutrientId: 10, nutrientName: 'potassium', nutrientNumber: '1', unitName: 'mg', value: 100 } as Nutrient,
                    { nutrientId: 15, nutrientName: 'fiber', nutrientNumber: '2', unitName: 'mg', value: 900 } as Nutrient
                ]
            } as Food,
            {
                description: 'apple',
                fdcId: 2,
                foodCategory: 'fruit',
                foodNutrients: [
                    { nutrientId: 10, nutrientName: 'potassium', nutrientNumber: '1', unitName: 'mg', value: 35 } as Nutrient,
                    { nutrientId: 15, nutrientName: 'fiber', nutrientNumber: '2', unitName: 'mg', value: 700 } as Nutrient
                ]
            } as Food,
        ]
    } as IGeneralState,
    reducers: {
        addFood: (state: IGeneralState, action: PayloadAction<Food>) => {
            if (state.foods.find((f) => f.fdcId === action.payload.fdcId) === undefined) {
                state.foods = [...state.foods, action.payload];
            }
        },
        removeFood: (state: IGeneralState, action: PayloadAction<number>) => {
            state.foods = state.foods.filter((f) => f.fdcId !== action.payload);
        }
    },
})

export const { addFood, removeFood } = generalSlice.actions;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const GeneralState = (state: IGeneralState) => state;

export default generalSlice.reducer;
