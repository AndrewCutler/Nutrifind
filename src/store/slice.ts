import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Food } from '../models/models'

interface IGeneralState {
    foods: Food[];
}

export const generalSlice = createSlice({
    name: 'general',
    initialState: {
        foods: []
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
