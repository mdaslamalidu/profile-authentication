import React, { useContext } from 'react';
import { moneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money, setMoney] = useContext(moneyContext)
    return (
        <div>
            <h3>sister</h3>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Add 1000</button>
        </div>
    );
};

export default Sister;