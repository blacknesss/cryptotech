import { removeMarketAsset } from '../../features/crypto/model/cryptoSlice';
import { useAppDispatch, useAppSelector } from '../../features/crypto/model/hooks';
import styles from './Main.module.scss';

export default function Main() {
    const data = useAppSelector((state) => state.mainData);
    const dispatch = useAppDispatch();

    const totalPortfolioValue = data.reduce((sum, asset) => sum + asset.total, 0);

    const handleRemove = (symbol: string) => {
        dispatch(removeMarketAsset(symbol));
    };

    return (
        <main className={styles.main}>
            <div className='container'>
                <table>
                    <thead>
                        <tr>
                            <th>Актив</th>
                            <th>Количество</th>
                            <th>Цена</th>
                            <th>Общая стоимость</th>
                            <th>Изм. за 24 ч.</th>
                            <th>% портфеля</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((asset) => (
                            <tr key={asset.symbol} onClick={() => handleRemove(asset.symbol)}>
                                <td>{asset.symbol}</td>
                                <td>{asset.quantity}</td>
                                <td>${asset.price.toFixed(2)}</td>
                                <td>${asset.total.toFixed(2)}</td>
                                <td
                                    className={
                                        asset.change24h >= 0 ? styles.positive : styles.negative
                                    }
                                >
                                    {asset.change24h.toFixed(2)}%
                                </td>
                                <td>{((asset.total / totalPortfolioValue) * 100).toFixed(2)}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
