import React from 'react';
import { Item } from './Item';
import "../css/Items.css";;

export const ItemList = props => (
    <div className = 'card-list'>
        {props.items.map(item => (
            <Item key = {item.id} item ={item}/>
        ))}
    </div>
);