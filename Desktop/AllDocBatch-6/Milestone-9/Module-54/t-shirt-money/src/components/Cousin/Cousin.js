import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Cousin = () => {
    const [ring, house, setHouse] = useContext(ringContext);
    return (
        <div>
            <h3>Cousin</h3>
            <p>House: {house}</p>
            <button onClick={() => setHouse(house - 1)}>Decrease</button>
        </div>
    );
};

export default Cousin;