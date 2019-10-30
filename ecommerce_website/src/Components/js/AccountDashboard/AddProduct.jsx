import React, {useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ManufacturerFilter } from "../HomePage/ManufacturerFilter";
import { CategoryFilter } from "../HomePage/CategoryFilter";

const AddProduct = props => {
    const[categoryFilter, setCategoryFilter] = useState("");
    const[manufacturerFilter, setManufacturerFilter] = useState("");
  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the following information to create a Product:
          </DialogContentText>
          
          <TextField
            autoFocus
            margin="dense"
            id="productName"
            label="Product Name"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Price"
            fullWidth
            type="number"
          />
          <TextField
            autoFocus
            margin="dense"
            id="quantity"
            label="Quantity"
            type="number"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            fullWidth
          />

          <CategoryFilter
          handleChange={e => setCategoryFilter(e.target.value)}
            />
        <ManufacturerFilter
          handleChange={e => setManufacturerFilter(e.target.value)}
            />
          <TextField
            autoFocus
            margin="dense"
            id="img1"
            label="Image (Mandatory)"
            fullWidth
            type="file"
          />
          <TextField
            autoFocus
            margin="dense"
            id="img2"
            label="Image (Optional)"
            fullWidth
            type="file"
          />
          <TextField
            autoFocus
            margin="dense"
            id="img3"
            label="Image (Optional)"
            fullWidth
            type="file"
          />
          <TextField
            autoFocus
            margin="dense"
            id="img4"
            label="Image (Optional)"
            fullWidth
            type="file"
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.handleClose} color="primary">
            Add Product
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AddProduct;