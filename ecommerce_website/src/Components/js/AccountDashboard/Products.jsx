import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Title from './Title';
import AddProduct from './AddProduct';

// Generate Order Data
function createData(id, date, item, quantity, numberSold, amount) {
    return { id, date, item, quantity, numberSold, amount };
}

const rows = [
    createData(0, '16 Mar, 2019', 'Nice Socks', 50, 4, 20.00)

];

const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));



export default function Products(props) {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <React.Fragment>
            <Title>Products</Title>
            <AddProduct sellerId={props.sellerId} open={open} handleClose={handleClose}/>
            <Grid  spacing={6}>
                <div>
                <Button variant="contained" color="primary" onClick={handleClickOpen}>Add Product </Button> 
                
                
                   <Button variant="contained" color="Secondary">Delete Product </Button> 
                
                
                 <Button variant="contained" color="default"> Modify Product </Button>   
                 </div>
            </Grid>
            <Grid item xs={3}>
            </Grid>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date Created</TableCell>
                        <TableCell>Item</TableCell>
                        <TableCell> Quantity </TableCell>
                        <TableCell> Number Sold </TableCell>
                        <TableCell align="right">Unit Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.item}</TableCell>
                            <TableCell>{row.quantity}</TableCell>
                            <TableCell>{row.numberSold}</TableCell>
                            <TableCell align="right">${row.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}