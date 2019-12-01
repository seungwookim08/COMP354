import React from 'react';
import "../../css/Items.css";
import Card from '@material-ui/core/card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addItem} from '../../../Redux/cart/cart.actions';

const Item = ({item, history, addItem}) => {
    const {id, name, price, images, category, manufacturer} = item;
    return(
        <Card>
            <CardContent
                onClick={() => {
                    history.push("/product/" + item.id);
                }}
            >
                <div className='item-container'>
                    <img alt="item" src={images[0]} style={{width: 200, height: 200}} />
                    <Typography variant="h5" component="h2"> {name} </Typography>
                    <Typography> Price: {price} $</Typography>
                    <Typography> Category: {category} </Typography>
                    <Typography> Manufacturer: {manufacturer} </Typography>
                    {/* <Typography> Rating: {props.item.rating} </Typography> */}
                </div>
            </CardContent>
            <div className="button">
                <Button variant="outlined" onClick={() => addItem(item)}>Add To Cart</Button>
            </div>
        </Card>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default withRouter(connect(null, mapDispatchToProps)(Item));
