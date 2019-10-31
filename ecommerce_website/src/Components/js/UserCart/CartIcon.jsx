import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../../ImageAssets/shopping-bag.svg';
import '../../css/Cart.css';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../../Redux/cart/cart.actions';
import {selectCartItemsCount} from "../../../Redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

//toggle cart hidden action
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

// const mapStateToProps = state => ({
//     itemCount: selectCartItemsCount(state)
//   });

export default connect (null,mapDispatchToProps)(CartIcon);