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

    let address = props.address;
    let userId = props.user;
    let cartItems = props.cartItems;
    let arrFormData = [];

    
    //adds all the productIds and quantitys to formdata then adds them to an array
    for(let i = 0; i < cartItems.length; i++){
        let data = `{"productId":"${cartItems[i].id}","quantity":"${cartItems[i].quantity}"}`;
        let obj = JSON.parse(data);
        arrFormData.push(obj);
    }
    
    function completePurchase(userId,address){
        let data =  `{"shippingAddress":"${address}"}`;
        let obj = JSON.parse(data);
        axios
            .post(`https://rocky-shore-99218.herokuapp.com/users/${userId}/orders`, obj, {})
            .then(({ data }) => {
                console.log(data);
            })
            .catch(function (response) {
                console.log(response);
            });

        window.open('https://www.paypal.com/ca/signin','_blank');
        handleClose();
    }

    function addToCart(arrFormData, userId) {
     //  looping with async = a bad time, I hope this works
    //    for(let i = 0; i < arrFormData.length; i++){
    //         axios
    //             .post(`https://rocky-shore-99218.herokuapp.com/users/${userId}/cart`, arrFormData[i], {})
    //             .then(({ data }) => {
    //                 console.log(data);
    //             })
    //             .catch(function (response) {
    //                 console.log(response);
    //             });
    //    }

        props.handleClose();
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Complete Order</DialogTitle>
            <DialogContentText>
                        Thanks for Shopping with us!
            </DialogContentText>
            <DialogContent>
                You are one step away, just click the PayPal button to finish this order.
            </DialogContent>
            <DialogActions>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={e => { 
                        completePurchase(userId, address); 
                        }}>
                        <PaypalIcon />
                    </Button>

                </DialogActions>
            </Dialog>

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
                    <Button onClick={e => { 
                        addToCart(arrFormData, userId);
                        handleClickOpen();
                         }}>
                        Finalize Purchase
                    </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}
export default CheckoutPopup;