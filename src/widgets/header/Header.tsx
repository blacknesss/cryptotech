import { useState } from 'react';
import styles from './Header.module.scss';
import { Modal } from '../../shared/ui/Modal/Modal';
import { setTasks } from '../../features/crypto/model/cryptoSlice';
import { useAppDispatch } from '../../features/crypto/model/hooks';

export default function Header() {
    const [active, setActive] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(setTasks())
    }
    
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
                            value={''}
                            onChange={() => ''}
                        />
                        <div>
                            <div onClick={handleClick}>
                              <p>BTC</p>
                              <p>$56564</p>
                              <p>-1%</p>
                            </div>

                            <div>
                              <p>BTC</p>
                              <p>$56564</p>
                              <p>-1%</p>
                            </div>

                            <div>
                              <p>BTC</p>
                              <p>$56564</p>
                              <p>-1%</p>
                            </div>

                            <div>
                              <p>BTC</p>
                              <p>$56564</p>
                              <p>-1%</p>
                            </div>

                            <div>
                              <p>BTC</p>
                              <p>$56564</p>
                              <p>-1%</p>
                            </div>

                            <div>
                              <p>BTC</p>
                              <p>$56564</p>
                              <p>-1%</p>
                            </div>

                            <div>
                              <p>BTC</p>
                              <p>$56564</p>
                              <p>-1%</p>
                            </div>

                            <div>
                              <p>BTC</p>
                              <p>$56564</p>
                              <p>-1%</p>
                            </div>

                            <div>
                              <p>BTC</p>
                              <p>$56564</p>
                              <p>-1%</p>
                            </div>
                            <div>
                              <p>BTC</p>
                              <p>$56564</p>
                              <p>-1%</p>
                            </div>
                            <div>
                              <p>BTC</p>
                              <p>$56564</p>
                              <p>-1%</p>
                            </div>
                            <div>
                              <p>BTC</p>
                              <p>$56564</p>
                              <p>-1%</p>
                            </div>
                            <div>
                              <p>BTC</p>
                              <p>$56564</p>
                              <p>-1%</p>
                            </div>
                            <div>
                              <p>BTC</p>
                              <p>$56564</p>
                              <p>-1%</p>
                            </div>
                            <div>
                              <p>BTC</p>
                              <p>$56564</p>
                              <p>-1%</p>
                            </div>
                            <div>
                              <p>BTC</p>
                              <p>$56564</p>
                              <p>-1%</p>
                            </div>
                            <div>
                              <p>BTC</p>
                              <p>$56564</p>
                              <p>-1%</p>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
}
