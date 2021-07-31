import { configureStore } from '@reduxjs/toolkit'
import generalReducer from './slice';

export default configureStore({
    reducer: { general: generalReducer },
});
