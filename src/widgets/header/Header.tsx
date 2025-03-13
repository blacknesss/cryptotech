import { useState } from 'react';
import styles from './Header.module.scss';
import { Modal } from '../../shared/ui/Modal/Modal';
import { useAppDispatch, useAppSelector } from '../../features/crypto/model/hooks';
import { MarketAsset, MainData } from '../../shared/config/types';
import { setMainData } from '../../features/crypto/model/cryptoSlice';

export default function Header() {
    const [active, setActive] = useState<boolean>(false);
    const [flag, setFlag] = useState(false);
    const [selectedItem, setSelectedItem] = useState<MarketAsset | null>(null);
    const [quantity, setQuantity] = useState<number>(0);

    const data = useAppSelector((state) => state.assets);
    const [value, setValue] = useState<string>('');
    const dispatch = useAppDispatch();

    const handleClick = (item: MarketAsset): void => {
        const total = item.price * quantity;
        const mainData: MainData = {
            ...item,
            quantity,
            total,
            percent: 0,
        };
        dispatch(setMainData(mainData));
        setFlag(false);
        setActive(false);
    };

    const filterData: MarketAsset[] = data.filter((item) =>
        item && item.symbol && value
            ? item.symbol.toLowerCase().includes(value.toLowerCase())
            : true,
    );

    return (
        <div className='container'>
            <div className={styles.header}>
                <h1>PORTFOLIO OVERVIEW</h1>
                <button onClick={() => setActive(true)}>добавить</button>
                <Modal active={active} setActive={setActive}>
                    <div className={styles.header__modal}>
                        <input
                            type='text'
                            placeholder='Поиск валюты'
                            value={value}
                            onChange={(e) => setValue((e.preventDefault(), e.currentTarget.value))}
                        />
                        <div>
                            {filterData.length < 1 ? (
                                <h1>loading</h1>
                            ) : (
                                filterData.map((item, id) => (
                                    <div
                                        onClick={() => {
                                            setFlag(true);
                                            setSelectedItem(item);
                                        }}
                                        key={id}
                                    >
                                        <p>{item.symbol}</p>
                                        <p>${item.price}</p>
                                        <p>{item.change24h}%</p>
                                    </div>
                                ))
                            )}
                        </div>
                        {flag && selectedItem && (
                            <div>
                                <p style={{ textAlign: 'center' }}>
                                    {selectedItem.symbol} {selectedItem.price}{' '}
                                    {selectedItem.change24h}
                                </p>
                                <input
                                    type='text'
                                    placeholder='Введите количество'
                                    value={quantity}
                                    onChange={(e) => setQuantity(Number(e.currentTarget.value))}
                                />
                            </div>
                        )}
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button onClick={() => selectedItem && handleClick(selectedItem)}>
                                добавить
                            </button>
                            <button onClick={() => setActive(false)}>отмена</button>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
}
