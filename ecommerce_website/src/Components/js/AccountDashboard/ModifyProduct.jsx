import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';


const ModifyProduct = (props) => {

    const [selectProduct, setSelectProduct] = useState("");
    const [productId, setProductId] = useState("");
    const [product, setProduct] = useState("")
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [category, setCategory] = useState("");


    function updateFields() {
        // console.log(selectProduct);
        // setProductId(selectProduct.id);
        // setProduct(selectProduct.name);
        // setPrice(selectProduct.price);
        // setQuantity(selectProduct.quantity);
        // setDescription(selectProduct.description);
        // setManufacturer(selectProduct.manufacturer);
        // setCategory(selectProduct.category);
        let id = selectProduct.id;
        let name = selectProduct.name;
        let price = selectProduct.price;
        let quantity = selectProduct.quantity;
        let description = selectProduct.description;
        let manufacturer = selectProduct.manufacturer;
        let category = selectProduct.category;

        console.log(JSON.stringify(id));
        console.log(JSON.stringify(name));
        console.log(JSON.stringify);
        console.log(quantity);
        console.log(description);
        console.log(manufacturer);
        console.log(category);
        console.log(price);

    }
    function sendPostRequest() {
        //handle form submission

        const formData = new FormData();

        formData.append("price", price);
        formData.append("quantity", quantity);
        formData.append("description", description);
        formData.append("manufacturer", manufacturer);
        formData.append("category", category);


        console.log("Function called with the following info:");
        console.log(formData);

        axios
            .post('https://rocky-shore-99218.herokuapp.com/products/', formData)
            .then(({ data }) => {
                console.log(data);
            })
            .catch(function (response) {
                console.log(response);
            });

        props.handleClose();
    }

    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Modify Product</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please choose a Product at modify:
          </DialogContentText>
                    <FormControl>

                        <InputLabel htmlFor="age-native-simple">Product</InputLabel>
                        <Select
                            native
                            onChange={e => {
                                setSelectProduct(e.target.value);
                                updateFields();
                            }
                            }
                            autoWidth={true}
                        >
                            <option value={""}></option>
                            {props.allItems.map(item =>
                                <option value={JSON.stringify(item)}>{item.name}</option>)}
                        </Select>
                    </FormControl>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="productName"
                        label="Product Name"
                        fullWidth
                        defaultValue={product}
                        onChange={e => setProduct(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="price"
                        label="Price"
                        fullWidth
                        type="number"
                        defaultValue={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="quantity"
                        label="Quantity"
                        type="number"
                        fullWidth
                        defaultValue={quantity}
                        onChange={e => setQuantity(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        fullWidth
                        defaultValue={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="category"
                        label="category"
                        fullWidth
                        onChange={e => setCategory(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="manufacturer"
                        label="manufacturer"
                        fullWidth
                        onChange={e => setManufacturer(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        Cancel
          </Button>
                    <Button color="primary" onClick={e => {
                        sendPostRequest();
                    }}>

                        Modify Product
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default ModifyProduct;