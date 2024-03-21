import { configureStore } from "@reduxjs/toolkit";
import metaMaskReducer from './metaMaskSlice';

const store = configureStore({
    reducer: {
        metaMask: metaMaskReducer,
    },
});

export default store;
// Infer the `RootState` types from the store itself
export type RootState = ReturnType<typeof store.getState>
