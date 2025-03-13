import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MainData, MarketAsset, MarketDataState } from '../../../shared/config/types';

const loadMainDataFromStorage = (): MainData[] => {
    try {
        const serializedData = localStorage.getItem('mainData');
        return serializedData ? JSON.parse(serializedData) : [];
    } catch (error) {
        console.error('Error loading data from localStorage:', error);
        return [];
    }
};

const initialState: MarketDataState = {
    assets: [],
    mainData: loadMainDataFromStorage(),
};

const cryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        updateMarketAsset: (state, action: PayloadAction<MarketAsset>) => {
            const index = state.assets.findIndex((asset) => asset.symbol === action.payload.symbol);
            if (index !== -1) {
                state.assets[index] = action.payload;
            } else {
                state.assets.push(action.payload);
            }

            const mainIndex = state.mainData.findIndex(
                (data) => data.symbol === action.payload.symbol,
            );
            if (mainIndex !== -1) {
                state.mainData[mainIndex] = {
                    ...state.mainData[mainIndex],
                    price: action.payload.price,
                    change24h: action.payload.change24h,
                    total: state.mainData[mainIndex].quantity * action.payload.price,
                };
            }
        },
        setMainData: (state, action: PayloadAction<MainData>) => {
            const index = state.mainData.findIndex((data) => data.symbol === action.payload.symbol);
            if (index !== -1) {
                state.mainData[index] = action.payload;
            } else {
                state.mainData.push(action.payload);
            }
        },
        removeMarketAsset: (state, action: PayloadAction<string>) => {
            state.mainData = state.mainData.filter((asset) => asset.symbol !== action.payload);
        },
    },
});

export const { updateMarketAsset, setMainData, removeMarketAsset } = cryptoSlice.actions;
export default cryptoSlice.reducer;
