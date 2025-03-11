import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './cryptoSlice';


export const makeStore = () => {
  return configureStore({
    reducer: todoSlice,
  })
} 
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']