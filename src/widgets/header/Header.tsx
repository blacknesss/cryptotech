import { useState } from 'react';
import styles from './Header.module.scss';
import { Modal } from '../../shared/ui/Modal/Modal';
import { useAppDispatch, useAppSelector } from '../../features/crypto/model/hooks';
import { MarketAsset } from '../../shared/config/types';
import { setMainData } from '../../features/crypto/model/cryptoSlice';

export default function Header() {
    const [active, setActive] = useState<boolean>(false);
    

    const data = useAppSelector(state => state.assets);
    const [value, setValue] = useState<string>('');
    const dispatch = useAppDispatch();

    
    const handleClick = (item:MarketAsset):void => {
        dispatch(setMainData(item))
    }

    const filterData:MarketAsset[] = data.filter(item => item.symbol.toLowerCase().includes(value.toLowerCase()))

    

    

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
                            {filterData.length < 1 ?
                            <h1>loading</h1>
                            :
                            filterData.map((item, id) => (
                              <div onClick={() => handleClick(item)} key={id}>
                                <p>{item.symbol}</p>
                                <p>${item.price}</p>
                                <p>{item.change24h}%</p>
                              </div>
                            ))}
                        </div>
                        
                    </div>
                </Modal>
            </div>
        </div>
    );
}
