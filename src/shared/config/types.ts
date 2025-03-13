export interface MarketAsset {
    symbol: string;
    price: number;
    change24h: number;
}

export interface MainData {
    symbol: string;
    count?: number;
    price: number;
    sumPrice?: number;
    change24h: number;
    percent?: number;
    quantity: number;
    total: number;
}

export interface MarketDataState {
    assets: MarketAsset[];
    mainData: MainData[];
}
