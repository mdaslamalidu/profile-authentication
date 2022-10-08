import React, { createContext, useState } from 'react';
import Ancle from '../Ancle/Ancle';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import "./Grandpa.css";


export const ringContext = createContext("ring");
export const moneyContext = createContext(555);

const Grandpa = () => {
    const [house, setHouse] = useState(2)
    const [money, setMoney] = useState(555);
    const ring = "daymond ring";
    return (
        <ringContext.Provider value={[ring, house, setHouse]}>
            <moneyContext.Provider value={[money, setMoney]}>
                <div className='grandpa'>
                    <h2>GrandPa House {house}</h2>
                    <section className='flex'>
                        <Father />
                        <Ancle />
                        <Aunty />
                    </section>
                </div>
            </moneyContext.Provider>
        </ringContext.Provider>
        
    );
};

export default Grandpa;