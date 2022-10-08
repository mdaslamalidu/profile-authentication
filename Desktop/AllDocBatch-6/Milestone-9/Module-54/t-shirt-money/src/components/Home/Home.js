import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import "./Home.css";

const Home = () => {
    const t_shirt = useLoaderData()
    console.log(t_shirt)
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tshirt) => {
        const exist = cart.find(item => item._id === tshirt._id);
        if(exist){
            alert("already added this item")
            return;
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart)
        }
       
    }

    const handleRemoviItem = (tshirt) => {
        const remainingITems = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remainingITems)
    }

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    t_shirt.map(item => <TShirt
                        key={item._id}
                        tshirt={item}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </div>
            <div className="cart-container">
                <Cart 
                    cart={cart}
                    handleRemoviItem={handleRemoviItem}
                />
            </div>
        </div>
    );
};

export default Home;