import React from 'react';
import "./TShirt.css";

const TShirt = ({ tshirt, handleAddToCart }) => {
    const { name, price, picture} = tshirt;
    return (
        <div className='tshirt-details'>
            <img src={picture} alt="" />
            <h3>Name: {name}</h3>
            <h3><small>Price: {price}</small></h3>
            <button onClick={() => handleAddToCart(tshirt)}>Buy This</button>
        </div>
    );
};

export default TShirt;