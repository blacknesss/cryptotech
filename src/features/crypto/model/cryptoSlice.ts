import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MainData, MarketAsset, MarketDataState } from "../../../shared/config/types";



const initialState:MarketDataState = {
    assets: [],
    mainData: [],
}

const cryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        updateMarketAsset: (state, action: PayloadAction<MarketAsset>) => {
          const index = state.assets.findIndex(asset => asset.symbol === action.payload.symbol);
          if (index !== -1) {
            state.assets[index] = action.payload;
          } else {
            state.assets.push(action.payload);
          } //я так понимаю, перезаписывает конкретный объект, а не весь массив

          const mainIndex = state.mainData.findIndex(data => data.symbol === action.payload.symbol);
            if (mainIndex !== -1) {
                state.mainData[mainIndex] = action.payload;
            }
        },
        setMainData: (state, action:PayloadAction<MainData>) => {
            const index = state.assets.findIndex(asset => asset.symbol === action.payload.symbol);
            if (index !== -1) {
                state.mainData[index] = action.payload;
            } else {
                state.mainData.push(action.payload);
            }
        },
        setMarketAssets: (state, action: PayloadAction<MarketAsset[]>) => {
          state.assets = action.payload;
        }
      }
});
export const { updateMarketAsset, setMainData} = cryptoSlice.actions;
export default cryptoSlice.reducer;