import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const CheckoutItem = ({cartItem: {imageUrl, name, price, quantity}}) => (
    <TableRow>
        <TableCell><img alt="item" src={imageUrl}/></TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{quantity}</TableCell>
        <TableCell>{price}</TableCell>
        <TableCell align="right">&#10005;</TableCell>
    </TableRow>
)

export default CheckoutItem;