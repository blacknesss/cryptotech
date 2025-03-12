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
}

export interface MarketDataState {
  assets: MarketAsset[];
  mainData: MainData[];
}
  
export interface PortfolioAsset extends MarketAsset {
    quantity: number;
    total: number;
}