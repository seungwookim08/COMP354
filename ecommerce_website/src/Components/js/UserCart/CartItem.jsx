import React from 'react';
import '../../css/Cart.css';

const CartItem = ({item: {id, imageUrl, price, name, quantity} }) => (
    <div className='cart-item'>
       <img src={imageUrl}alt='item'/>
       <div className='item-details'>
          <span className='name'> {name} </span> 
          <span className='name'> {quantity} x ${price} </span> 
        </div> 
    </div>
);

export default CartItem;