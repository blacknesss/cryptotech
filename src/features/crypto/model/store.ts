import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './cryptoSlice';
import { localStorageMiddleware } from './localStorage';

export const makeStore = () => {
    return configureStore({
        reducer: todoSlice,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
    });
};
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
