import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import generalSlice from './slice';

const store: EnhancedStore = configureStore({
    reducer: { general: generalSlice.reducer },
});

export default store;
