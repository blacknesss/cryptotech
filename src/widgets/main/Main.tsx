import { useAppSelector } from "../../features/crypto/model/hooks";
import styles from './Main.module.scss';

export default function Main() {
  const data = useAppSelector(state => state.mainData);
  
  const handleRemove = (key:string) => {
    
  }

  return (
    <main className={styles.main}>
      <div className="container">
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
            {data.map(asset => (
              <tr  key={asset.symbol}>
                {/* При клике на актив удаляем его из портфеля */}
                <td onClick={() => handleRemove(asset.symbol)}>
                  {asset.symbol}
                </td>
                <td>{`asset.quantity`}</td>
                <td>{asset.price}</td>
                <td>{`asset.total.toFixed(2)`}</td>
                <td>{asset.change24h}%</td>
                <td>{/* Здесь можно рассчитать процент от общего портфеля */}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
