import React, {Component} from 'react';
import $ from 'jquery'; 



	 const  Products = props => {

            const {prodimg, prodtitle, prodprice, proddescript} = props

     
           
        
        return ( 
            
           		<div>
                
                    <div class="featflex">
                    	<i class="far heart">&#xf004;</i>
		                <img src={props.prodimg}/>
		                <div class="prodinfo">
		                    <h4>{props.prodtitle}</h4>
		                    <p>{props.prodprice}</p>
		                    <hr/>
		                    <p class="descript">{props.proddescript}</p>
		                    <a href="#"><button>Add To Cart</button></a>
		                </div>
		            </div> 
            </div> 
            ) 



}
 
export default Products;


 

