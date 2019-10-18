import React from 'react';
import "../css/Items.css";
import Card from '@material-ui/core/card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


export const Item = props => (
    <Card>
        <CardContent>
            <div className='item-container'>
                <img alt="item" src={`https://robohash.org/${props.item.id}?set=set1&size=180x180`} />
                <Typography variant="h5" component="h2"> {props.item.name} </Typography>
                <Typography> Price: {props.item.price} $</Typography>
                <Typography> Category: {props.item.category} </Typography>
                <Typography> Seller: {props.item.seller} </Typography>
                <Typography> Rating: {props.item.rating} </Typography>
                <Button variant="contained">Add to Cart</Button>
            </div>
        </CardContent>
    </Card>
);