import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let totalPrice=0;
    let totalShipping=0;
    for(const product of cart){
        totalPrice=totalPrice+product.price
        totalShipping=totalShipping+product.shipping
    }
    const tax=totalPrice*7/100;

    const granTotal=totalPrice+totalShipping+tax
 
    return (
        <div className='cart'>
           <h4>Order Summary</h4>
          <p>selected items: {cart.length}</p> 
          <p>Total price: {totalPrice}</p> 
          <p>Total shipping: {totalShipping} </p> 
          <p>Tax:{tax.toFixed(0)} </p> 
          <p>Grand total:{granTotal.toFixed(0)} </p> 
          
        </div>
    );
};

export default Cart;