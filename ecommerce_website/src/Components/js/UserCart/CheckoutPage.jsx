import React from 'react';
import axios from "axios";
import '../../css/Cart.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect';
import { selectCartItems, selectCartTotal } from '../../../Redux/cart/cart.selectors';
import { selectUser } from '../../../Redux/user/user.selectors';
import CheckoutItem from "./CheckoutItem";
import { PayPalButton } from "react-paypal-button-v2";

import { Redirect } from 'react-router-dom';
import L from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


// import {toggleCartHidden} from "../../../Redux/cart/cart.actions";


const CheckoutPage = ({cartItems, total, user}) => (
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
        {user.sellerId != null ?  (
            <div class="pay_button">  
                   <PayPalButton
                        amount={total}
                        onCancel={(details, data)  => {
                                axios.post('https://rocky-shore-99218.herokuapp.com/users/'+user.sellerId+'/orders', {"shippingAddress":user.primaryAddress}, {})
                              .then(function (response) {
                                console.log(response.data.is_success);
                                console.log(response.data.message);
                                if(response.data.is_success == true)
                                    alert("Thank you for purchasing from 354thestars");
                              })
                              .catch(function (error) {
                                console.log(error);
                              });
                        }}
                    />
            </div>
            )
            : 
            (
            <div class="pay_button"> 
             <L variant="body2" label="Login" component={Link} to={"/Login"} > 
                <Button
                    fullWidth="true"
                    color="primary"
                    variant="contained"
                    > Please Log In Before Purchase 
                </Button>
            </L>
            </div>
                )
        }
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
    user: selectUser,
    cartItems:selectCartItems,
    total:selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);

/*
onSuccess={(details, data) => {
alert("Transaction completed by " + details.payer.name.given_name);
return fetch("/paypal-transaction-complete", {
method: "post",
body: JSON.stringify({
orderID: data.orderID
})
});
}}
*/
/*options={{
clientId: "AWzSg6-sl6mTpYBnxEvA8MTgVuH_lL0iBkGggYnx3nsQV55WP5JqMiKVEQzunnskanuBz2WKl5fZzNxC"
,currency:"CAD"
}}
*/