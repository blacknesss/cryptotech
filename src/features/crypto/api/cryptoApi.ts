import { AppDispatch } from '../model/store';
import { updateMarketAsset } from '../model/cryptoSlice';
import { MarketAsset } from '../../../shared/config/types';

const BASE_URL = 'wss://stream.binance.com:9443/stream?streams=';

const assets = [
    'btcusdt',
    'ethusdt',
    'bnbusdt',
    'xrpusdt',
    'adausdt',
    'dogeusdt',
    'dotusdt',
    'maticusdt',
    'ltcusdt',
    'linkusdt',
    'uniusdt',
    'bchusdt',
    'xlmusdt',
    'vetusdt',
    'etcusdt',
    'filusdt',
    'atomusdt',
    'icpusdt',
    'axsusdt',
    'sandusdt',
    'shibusdt',
    'egldusdt',
    'manausdt',
    'xtzusdt',
    'thetausdt',
    'ftmusdt',
    'hntusdt',
    'oneusdt',
    'aaveusdt',
    'cakeusdt',
    'chzusdt',
    'algousdt',
    'mkrusdt',
    'enjusdt',
    'zilusdt',
    'compusdt',
    'stxusdt',
    'lrcusdt',
    'wavesusdt',
    'iotxusdt',
    'yfiusdt',
    'omgusdt',
    'batusdt',
    'ankrusdt',
    'crvusdt',
    'snxusdt',
    'sushiusdt',
    'dashusdt',
    'zecusdt',
    'qtumusdt',
    'rsrusdt',
    'oceanusdt',
    'storjusdt',
    'kavausdt',
    'balusdt',
    'icxusdt',
    'nknusdt',
    'cvcusdt',
    'dgbusdt',
    'sysusdt',
    'sxpusdt',
    'trbusdt',
    'sklusdt',
    'runeusdt',
    'creamusdt',
    'arbusdt',
    'lptusdt',
    'roseusdt',
    'ctkusdt',
    'fetusdt',
    'kmdusdt',
    'cotiusdt',
    'akrousdt',
    'bntusdt',
    'belusdt',
    'dockusdt',
    'ltousdt',
    'frontusdt',
    'twtusdt',
    'yfiiusdt',
    'pundixusdt',
    'mlnusdt',
    'hardusdt',
    'xvsusdt',
    'renusdt',
    'avausdt',
    'dodo_usdt',
    'straxusdt',
    'unfiusdt',
    'grtusdt',
];

let socket: WebSocket | null = null;

export const connectToBinance = (dispatch: AppDispatch) => {
    const streams = assets.map((symbol) => `${symbol}@ticker`).join('/');
    socket = new WebSocket(`${BASE_URL}${streams}`);

    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const stream = data.stream;
        const symbol = stream.split('@')[0].toUpperCase();

        const marketAsset: MarketAsset = {
            symbol: symbol,
            price: parseFloat(data.data.c),
            change24h: parseFloat(data.data.P),
        };

        dispatch(updateMarketAsset(marketAsset));
    };

    socket.onclose = () => {
        console.log('WebSocket connection closed');
    };
};

export const disconnectFromBinance = () => {
    if (socket) {
        socket.close();
        console.log('Соединение закрыто вручную');
    }
};
