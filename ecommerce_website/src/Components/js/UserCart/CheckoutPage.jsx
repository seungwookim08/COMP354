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
import { PayPalButton } from "react-paypal-button-v2";

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

    <p></p><br></br>
        <div class="center_total">Total: ${total}</div><p></p><br></br>
            <div class="pay_button">
                   {/*<Button variant="contained" color="primary"> Complete Purchase </Button>*/}          
                   <PayPalButton
                        amount={total}
                        onSuccess={(details, data) => {
                          alert("Transaction completed by " + details.payer.name.given_name);
                          return fetch("/paypal-transaction-complete", {
                            method: "post",
                            body: JSON.stringify({
                              orderID: data.orderID
                            })
                          });
                        }}
                        /*options={{
                            clientId: "AWzSg6-sl6mTpYBnxEvA8MTgVuH_lL0iBkGggYnx3nsQV55WP5JqMiKVEQzunnskanuBz2WKl5fZzNxC"
                            ,currency:"CAD"
                        }}*/
                      />
              </div>
    </div>

    ) 
    :
    (
        <div align="center"> <h2> Your cart is empty </h2></div>
    )
    }
    </div>
)



const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);