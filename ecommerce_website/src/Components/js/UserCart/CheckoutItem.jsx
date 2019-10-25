import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from "../../../Redux/cart/cart.actions";
import "../../css/Cart.css";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <TableRow>
            <TableCell><img alt="item" src={imageUrl} /></TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>
                <span className="quantity">
                    <div className="quantity-button" onClick={()=>removeItem(cartItem)}>&#10094;</div>
                    <span className="value">{quantity}</span>
                    <div className="quantity-button" onClick={()=>addItem(cartItem)}>&#10095;</div>
                </span>
            </TableCell>
            <TableCell>{price}</TableCell>
            <TableCell align="right" className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</TableCell>
        </TableRow>
    );
};



const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);