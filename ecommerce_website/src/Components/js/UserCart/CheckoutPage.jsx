import React, { useState } from 'react';
import axios from "axios";
import '../../css/Cart.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../../Redux/cart/cart.selectors';
import { selectUser } from '../../../Redux/user/user.selectors';
import CheckoutItem from "./CheckoutItem";
import { PayPalButton } from "react-paypal-button-v2";

import L from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function CheckoutPage({ cartItems, total, user }) {

    const [checkOne, setCheckOne] = useState(true);
    const [checkTwo, setCheckTwo] = useState(false);
    const [address, setAddress] = useState(user.primaryAddress);

    const handleChange = name => event => {

        console.log(user.alternateAddress);
        console.log(typeof(user.alternateAddress));

        if (name == "checkOne") {
            setCheckOne(true);
            setCheckTwo(false);
            console.log(checkOne);
            console.log(checkTwo);
            setAddress(user.primaryAddress);
        }
        if (name == "checkTwo") {
            setCheckOne(false);
            setCheckTwo(true);
            console.log(checkOne);
            console.log(checkTwo);
            setAddress(user.alternateAddress);
        }
    }


    return (
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
                                {cartItems.map(cartItem => (
                                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                                ))}
                            </TableBody>
                        </Table>

                        <p></p><br></br>

                        <div class="center_total">

                            SubTotal: ${total}
                            <p></p>
                            Taxes (15% QC + 8% commission):  ${(total * 0.15 + total * 0.08).toFixed(2)}
                            <p></p>
                            Total: ${(total * 1.23).toFixed(2)}
                            <p></p>

                        </div><p></p><br></br>

                        {(user.alternateAddress != 'null') && user.sellerId != null ? (
                            <div class="">
                                Please choose a shipping address.
                        <p></p>

                                <Table size="small">
                                    <TableHead >
                                        <TableRow>
                                            <TableCell>Primary Address </TableCell>
                                            <TableCell>Alternate Address </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableCell>
                                        <p> {user.primaryAddress}</p>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    onChange={handleChange("checkOne")}
                                                    checked={checkOne}
                                                    color="primary"
                                                />
                                            } label="Primary"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <p> {user.alternateAddress}</p>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    onChange={handleChange("checkTwo")}
                                                    checked={checkTwo}
                                                    color="primary"
                                                />
                                            } label="Alternate"
                                        />
                                        </TableCell>
                                    </TableBody>
                                </Table>
                            </div>
                        ) : (<p></p>)
                        }

                        <p></p><br></br>
                        {user.sellerId != null ? (
                            <div class="pay_button">

                                <PayPalButton
                                    amount={total}
                                    onCancel={(details, data) => {
                                        //console.log(address)
                                        axios.post('https://rocky-shore-99218.herokuapp.com/users/' + user.sellerId + '/orders', { "shippingAddress": address }, {})
                                            .then(function (response) {
                                                console.log(response.data.is_success);
                                                console.log(response.data.message);
                                                if (response.data.is_success == true)
                                                    alert("Thank you for purchasing from 354thestars");
                                                else 
                                                    alert("Something went wrong. Please try again");
                                            })
                                            .catch(function (error) {
                                                console.log(error);
                                                alert("Something went wrong. Please try again");
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
                                            color="black"
                                            variant="outlined"
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
}

const mapStateToProps = createStructuredSelector({
    user: selectUser,
    cartItems: selectCartItems,
    total: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage);

