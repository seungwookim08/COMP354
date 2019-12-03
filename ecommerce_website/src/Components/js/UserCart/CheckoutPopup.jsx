import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { ReactComponent as PaypalIcon } from '../../../ImageAssets/PayPal.svg';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PopupItem from '../UserCart/PopupItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';


const CheckoutPopup = props => {

    function completePurchase() {
        //handle form submission

        // axios
        //     .post('https://rocky-shore-99218.herokuapp.com/products/', )
        //     .then(({ data }) => {
        //         console.log(data);
        //     })
        //     .catch(function (response) {
        //         console.log(response);
        //     });

        props.handleClose();
    }

    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Finalize Order</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Here is a breakdown of your order.
                    </DialogContentText>

                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product</TableCell>
                                <TableCell> Quantity </TableCell>
                                <TableCell> Price </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.cartItems.map(cartItem => (
                                <PopupItem key={cartItem.id} cartItem={cartItem} />
                            ))}
                        </TableBody>
                    </Table>

                    <Table>
                        <TableRow>
                            <TableCell>
                            Shipping Address:
                            </TableCell>
                            <TableCell>
                            {props.address}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            SubTotal: 
                            </TableCell>
                            <TableCell>
                            ${props.total}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            Taxes (15% QC + 8% commission):
                            </TableCell>
                            <TableCell>
                            ${(props.total * 0.15 + props.total * 0.08).toFixed(2)}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            {<strong>Total:</strong>}
                            </TableCell>
                            <TableCell>
                            {<strong>${(props.total * 1.23).toFixed(2)}</strong>}
                            </TableCell>
                        </TableRow>
                    </Table>
                </DialogContent>

                <DialogActions>
                    <Button onClick={props.handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={e => { completePurchase(); }}>
                        <PaypalIcon />
                    </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}
export default CheckoutPopup;