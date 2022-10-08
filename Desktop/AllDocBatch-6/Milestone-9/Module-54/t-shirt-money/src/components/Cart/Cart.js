import React from 'react';
import "./Cart.css";

const Cart = ({ cart, handleRemoviItem }) => {

    // let message;
    // if(cart.length === 0){
    //     message = <p>Order at least one item</p>
    // }else if(cart.length === 1){
    //     message = <div>
    //         <h3>order one item for me</h3>
    //         <p>order one item for your father</p>
    //         <p>order one item for your daughter</p>
    //     </div>
    // }
    // else{
    //     message = <p>Thanks for your order</p>
    // }

    return (
        <div>
            <h3 className={cart.length === 3 ? 'blue' : 'green'}>Order Details</h3>
            <p className={`bold ${cart.length === 2 ? 'blue' : 'orange'}`}>Your Order{cart.length}</p>
            {
                cart.map(signleCart => <p key={signleCart._id}>
                    Name: {signleCart.name}
                    <button onClick={() => handleRemoviItem(signleCart)}>X</button>
                </p>)
            }
            {cart.length === 4 && <p>Four Items Found</p>}
            {cart.length === 3 ? <p>orger three items</p> : <p>order at least one items</p>}
        </div>
    );
};

export default Cart;