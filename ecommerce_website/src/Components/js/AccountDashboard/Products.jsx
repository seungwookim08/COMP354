import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Title from './Title';
import AddProduct from './AddProduct';
import ModifyProduct from './ModifyProduct';
import DeleteProduct from './DeleteProduct';
import axios from 'axios';

export default function Products(props) {

    const [allItems, setAllItems] = useState([]);
    const [openAdd, setOpenAdd] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [openModify, setOpenModify] = useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    useEffect(() => {
        let url = `https://rocky-shore-99218.herokuapp.com/users/${props.sellerId}/products/`;
        axios
            .get(url)
            .then(({ data }) => {
                if (data.is_success) {
                    setAllItems(data.contents);
                }
            });
    });

    const handleClickOpenAdd = () => {
        setOpenAdd(true);
    };

    const handleCloseAdd = () => {
        setOpenAdd(false);
    };
    const handleClickOpenModify = () => {
        setOpenModify(true);
    };

    const handleCloseModify = () => {
        setOpenModify(false);
    };
    const handleClickOpenDelete = () => {
        setOpenDelete(true);
    };

    const handleCloseDelete = () => {
        setOpenDelete(false);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <React.Fragment>
            <Title>Products</Title>
            <AddProduct sellerId={props.sellerId} open={openAdd} handleClose={handleCloseAdd} />
            <DeleteProduct sellerId={props.sellerId}  allItems={allItems} open={openDelete} handleClose={handleCloseDelete} />
            <ModifyProduct allItems={allItems} open={openModify} handleClose={handleCloseModify} />
            <Grid spacing={6}>
                <div>
                    <Button variant="contained" color="primary" onClick={handleClickOpenAdd}> Add Product </Button>
                    <Button variant="contained" color="Secondary" onClick={handleClickOpenDelete}>Delete Product </Button>
                    <Button variant="contained" color="default" onClick={handleClickOpenModify}> Modify Product </Button>
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
                    {allItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(item => (
                        <TableRow key={item.id}>
                            <TableCell>{item.created}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.quantity}</TableCell>
                            <TableCell>0</TableCell>
                            <TableCell align="right">${item.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={allItems.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </React.Fragment>
    );
}