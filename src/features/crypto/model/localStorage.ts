import { Middleware } from '@reduxjs/toolkit';
import { RootState } from './store';

export const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
    const result = next(action);
    const state = store.getState() as RootState;

    localStorage.setItem('mainData', JSON.stringify(state.mainData));

    return result;
};
