import React from 'react';
import Cousin from '../Cousin/Cousin';

const Ancle = () => {
    return (
        <div>
            <h3>Ancle</h3> 
            <section className='flex'>
                <Cousin />
                <Cousin />
            </section>
        </div>
    );
};

export default Ancle;