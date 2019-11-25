import React, {Component} from 'react';
import p1 from './images/p1.jpg';
import p2 from './images/p2.jpg';
import p3 from './images/p3.jpg';
import p4 from './images/p4.jpg';
import p5 from './images/p5.jpg';
import Products from './Products'
import $ from 'jquery';

class FeaturedProd extends Component {

    render() {
        return ( 
            <div className="grid"> 
            <div class="fcont">  
                <h1>Featured Products</h1>
                    <Products prodimg={p1} prodtitle="Women's Dresses" prodprice="$350.00" proddescript="This is a short description about the product" /> 
                    <Products prodimg={p2} prodtitle="Women Skirt" prodprice="$235.00" proddescript="This is a short description about the product" />
                    <Products prodimg={p3} prodtitle="Men's Shirt" prodprice="$799.00" proddescript="This is a short description about the product" />
                    <Products prodimg={p4} prodtitle="Men's Jackets" prodprice="$175.00" proddescript="This is a short description about the product" />
                    <Products prodimg={p5} prodtitle="Women's Pants" prodprice="$120.00" proddescript="This is a short description about the product" />
            </div>
            <div className="spacer"/>
            </div> 
            )
    }
} 
export default FeaturedProd;