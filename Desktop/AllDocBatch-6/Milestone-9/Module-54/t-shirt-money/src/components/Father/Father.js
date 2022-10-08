import React, { useContext } from 'react';
import Brother from '../Brother/Brother';
import { ringContext } from '../Grandpa/Grandpa';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = () => {
    const [ring, house, setHouse] = useContext(ringContext)
    return (
        <div>
            <h3>Father</h3>
            <p>House: {house}</p>
            <section className='flex'> 
                <Myself />
                <Brother />
                <Sister/>
            </section>
        </div>
    );
};

export default Father;