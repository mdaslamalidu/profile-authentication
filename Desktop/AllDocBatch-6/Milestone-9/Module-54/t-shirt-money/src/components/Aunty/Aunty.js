import React, { useContext } from 'react';
import { moneyContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [money, setMoney] = useContext(moneyContext)
    return (
        <div>
            <h3>Aunty</h3>
            <p>Money: {money}</p>
        </div>
    );
};

export default Aunty;