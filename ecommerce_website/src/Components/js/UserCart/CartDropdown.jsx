import React from 'react';
import "../../css/Cart.css";
import Button from '@material-ui/core/Button';
import CartItem from '../UserCart/CartItem';
import Card from '@material-ui/core/card';
import {connect} from 'react-redux';
import { selectCartItems } from '../../../Redux/cart/cart.selectors';

const CartDropdown = ({cartItems}) => (
    <Card className="cart-dropdown">
    
        <div  className = "cart-items">
        
        {cartItems.length ? 
        (cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/> ))) 
        :
        (<span>Your cart is empty</span>)}
        </div>
        <Button variant="contained">Checkout</Button>
    </Card>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})
export default connect(mapStateToProps)(CartDropdown);