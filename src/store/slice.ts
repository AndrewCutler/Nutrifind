import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFood, INutrient } from '../models/models'

interface IGeneralState {
    foods: IFood[];
    selectedNutrients: INutrient[];
}

const generalSlice = createSlice({
    name: 'general',
    initialState: {
        foods: [],
        selectedNutrients: [],
    } as IGeneralState,
    reducers: {
        addFood: (state: IGeneralState, action: PayloadAction<IFood>) => {
            if (state.foods.find((f) => f.fdcId === action.payload.fdcId) === undefined) {
                state.foods = [...state.foods, action.payload];
            }
        },
        removeFood: (state: IGeneralState, action: PayloadAction<number>) => {
            state.foods = state.foods.filter((f) => f.fdcId !== action.payload);
        },
        addNutrient: (state: IGeneralState, action: PayloadAction<INutrient>) => {
            if (state.selectedNutrients.find((n) => n.nutrientId === action.payload.nutrientId) === undefined) {
                state.selectedNutrients = [...state.selectedNutrients, action.payload];
            }
        },
        removeNutrient: (state: IGeneralState, action: PayloadAction<INutrient>) => {
            state.selectedNutrients = state.selectedNutrients.filter((n) => n.nutrientId !== action.payload.nutrientId);
        }
    },
})

export const { addFood, removeFood, addNutrient, removeNutrient } = generalSlice.actions;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const GeneralState = (state: { general: IGeneralState; }) => state.general;

export default generalSlice;
