import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import "../../css/Reviews.css";

const Reviews = (props) => {
  const [areValuesSet, setBooleanValuesSet] = useState(false);
  const [buyerReviews, setBuyerReviews] = useState("");
  const [sellerReplies, setSellerReplies] = useState("");
  const [buyerIds, setBuyerIds] = useState("");
  const [buyerNames, setBuyerNames] = useState("");

  useEffect(() => {
    if(props.sellerReplies && props.buyerIds && props.buyerReviews) {
      setBooleanValuesSet(true);
      console.log(props.sellerReplies);
      console.log(props.buyerIds);
      console.log(props.buyerReviews);
      setBuyerReviews(props.buyerReviews);
      setSellerReplies(props.sellerReplies);
      setBuyerIds(props.buyerIds);
    }
  })

  return(
    <div className="main-container"> 
      {
        areValuesSet ? 
        (
          buyerReviews.map(buyerReview => (
            <Grid item xs={12} sm={3} container >
              <div className="card-container">
                <Card>
                  <CardContent>
                    <div className="review-container">
                      <Typography variant="h5" component="h2"> Buyer Name </Typography>
                      <Typography variant="h5" component="h2"> {buyerReview} </Typography>
                      <Typography variant="h5" component="h2"> Seller Name </Typography>
                      <Typography variant="h5" component="h2"> Seller Review </Typography>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Grid>
          ))
        )
        :
        (
          <div>
            {/* Empty */}
          </div>
        )
      }
    </div>
  )
}

export default Reviews;