import React from 'react';
import "../../css/Cart.css";
import Button from '@material-ui/core/Button';
import CartItem from '../UserCart/CartItem';
import Card from '@material-ui/core/card';
import {connect} from 'react-redux';

const CartDropdown = ({cartItems}) => (
    <Card className="cart-dropdown">
    
        <div  className = "cart-items">
        {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem}/>
        ))}
        </div>
        <Button variant="contained">Checkout</Button>
    
    </Card>
)

const mapStateToProps = ({cart: { cartItems }}) => ({
    cartItems
})
export default connect(mapStateToProps)(CartDropdown);