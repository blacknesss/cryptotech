import { updateMarketAsset } from "../model/cryptoSlice";
import { AppDispatch } from "../model/store";


const BASE_URL = 'wss://stream.binance.com:9443/stream?streams=';

const assets = [
    'btcusdt', 'ethusdt', 'bnbusdt', 'xrpusdt', 'adausdt',
    'dogeusdt', 'dotusdt', 'maticusdt', 'ltcusdt', 'linkusdt',
    'uniusdt', 'bchusdt', 'xlmusdt', 'vetusdt', 'etcusdt',
    'filusdt', 'atomusdt', 'icpusdt', 'axsusdt', 'sandusdt',
    'shibusdt', 'egldusdt', 'manausdt', 'xtzusdt', 'thetausdt',
    'ftmusdt', 'hntusdt', 'oneusdt', 'aaveusdt', 'cakeusdt',
    'chzusdt', 'algousdt', 'mkrusdt', 'enjusdt', 'zilusdt',
    'compusdt', 'stxusdt', 'lrcusdt', 'wavesusdt', 'iotxusdt',
    'yfiusdt', 'omgusdt', 'batusdt', 'ankrusdt', 'crvusdt',
    'snxusdt', 'sushiusdt', 'dashusdt', 'zecusdt', 'qtumusdt',
    'rsrusdt', 'oceanusdt', 'storjusdt', 'kavausdt', 'balusdt',
    'icxusdt', 'nknusdt', 'cvcusdt', 'dgbusdt', 'sysusdt',
    'sxpusdt', 'trbusdt', 'sklusdt', 'runeusdt', 'creamusdt',
    'arbusdt', 'lptusdt', 'roseusdt', 'ctkusdt', 'fetusdt',
    'kmdusdt', 'cotiusdt', 'akrousdt', 'bntusdt', 'belusdt',
    'dockusdt', 'ltousdt', 'frontusdt', 'twtusdt', 'yfiiusdt',
    'pundixusdt', 'mlnusdt', 'hardusdt', 'xvsusdt', 'renusdt',
    'avausdt', 'dodo_usdt', 'straxusdt', 'unfiusdt', 'grtusdt'
];

const streams = assets.map((symbol) => `${symbol}@ticker`).join('/');

let socket: WebSocket | null = null;

export const connectToBinance = (dispatch: AppDispatch) => {
    socket = new WebSocket(`${BASE_URL}${streams}`);
  
    socket.onopen = () => {
      console.log('WebSocket connected');
    };
  
    socket.onmessage = (event) => {
      const parsed = JSON.parse(event.data);
      const data = parsed.data;
  
      const marketAsset = {
        symbol: data.s,
        price: parseFloat(data.c),
        change24h: parseFloat(data.P),
      };
  
      dispatch(updateMarketAsset(marketAsset));
    };
  
    socket.onclose = () => {
      console.log('WebSocket closed');
      setTimeout(() => connectToBinance(dispatch), 5000);
    };
  
    socket.onerror = (error) => {
      console.error('Ошибка WebSocket:', error);
    };
  };
  
  export const disconnectFromBinance = () => {
    if (socket) {
      socket.close();
      console.log('Соединение закрыто вручную');
    }
  };