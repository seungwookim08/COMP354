import React from 'react';
import '../../css/Cart.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect';
import { selectCartItems, selectCartTotal } from '../../../Redux/cart/cart.selectors';
import {toggleCartHidden} from "../../../Redux/cart/cart.actions";
import CheckoutItem from "./CheckoutItem";

const CheckoutPage = ({cartItems, total}) => (
    <div>
    {cartItems.length ? 
    (
    <div className="checkout">
        <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell> Quantity </TableCell>
                        <TableCell> Price </TableCell>
                        <TableCell align="right">Remove</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { cartItems.map(cartItem => (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    ))}
                </TableBody>
            </Table>
    <div>Total:${total}</div>
    <Button variant="contained" color="primary"> Complete Purchase </Button>
    </div>
    ) 
    :
    (
        <div> your cart is empty </div>
    )
    }
    </div>
)



const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);