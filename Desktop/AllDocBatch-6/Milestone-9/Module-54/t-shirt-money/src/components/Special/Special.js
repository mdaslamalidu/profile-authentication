import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [ring, house, setHouse] = useContext(ringContext)
    return (
        <div>
            <h3>Special</h3>
            <p>Gift: {ring}</p>
            <p>House: {house}</p>
            <button onClick={() => setHouse(house + 1)}>Increase</button>
        </div>
    );
};

export default Special;