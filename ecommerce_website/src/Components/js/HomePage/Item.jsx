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
    const {id, name, price, imageUrl, category, manufacturer} = item;

    return(
        <Card>
            <CardContent
            onClick={ () => {
                history.push("/item-details-page/" + item.id);
            }}
            >
                <div className='item-container'>
                    <img alt="item" src={imageUrl} />
                    <Typography variant="h5" component="h2"> {name} </Typography>
                    <Typography> Price: {price} $</Typography>
                    <Typography> Category: {category} </Typography>
                    <Typography> Manufacturer: {manufacturer} </Typography>
                    {/* <Typography> Rating: {props.item.rating} </Typography> */}
                    <Button variant="contained" onClick={() => addItem(item)}>Add To Cart </Button>
                </div>
            </CardContent>
        </Card>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default withRouter(connect(null, mapDispatchToProps)(Item));
