import React from 'react';
import "../../css/Items.css";
import Card from '@material-ui/core/card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


export const Item = props => (
    <Card>
        <CardContent>
            <div className='item-container'>
                <img alt="item" src={props.item.imageUrl} />
                <Typography variant="h5" component="h2"> {props.item.name} </Typography>
                <Typography> Price: {props.item.price} $</Typography>
                <Typography> Category: {props.item.category} </Typography>
                <Typography> Manufacturer: {props.item.manufacturer} </Typography>
                <Typography> Rating: {props.item.rating} </Typography>
                <Button variant="contained">Product Info</Button>
            </div>
        </CardContent>
    </Card>
);