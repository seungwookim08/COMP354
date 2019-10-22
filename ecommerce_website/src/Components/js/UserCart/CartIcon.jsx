import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../../assets/shopping-bag.svg';
import '../../css/Cart.css';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../../Redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect (null,mapDispatchToProps)(CartIcon);