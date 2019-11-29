import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Ratings from "./Ratings";
import axios from "axios";
import "../../css/Review.css";

const Review = (props) => {
  const [areValuesSet, setBooleanValuesSet] = useState(false);
  const [sellerName, setSellerName] = useState("");
  const [buyerReview, setBuyerReview] = useState("");
  const [sellerReply, setSellerReply] = useState("");
  const [buyerId, setBuyerId] = useState("");
  const [buyerRating, setBuyerRating] = useState("");
  const [buyerName, setBuyerName] = useState("");

  useEffect(() => {
    console.log("Use effect called!!!!");
    if(props.buyerId) {
      setBooleanValuesSet(true);
      console.log("inside review reply: " + props.sellerReply);
      console.log("inside review buyer id: " +props.buyerId);
      console.log("inside review buyer review: " +props.buyerReview);
      console.log("inside review buyer rating: " +props.buyerRating);
      setBuyerId(props.buyerId);
      setBuyerRating(props.buyerRating);
      setBuyerReview(props.buyerReview);
      setSellerReply(props.sellerReply);
    }
  })

  useEffect(() => {
    if(buyerId) {
      axios
      .get("https://rocky-shore-99218.herokuapp.com/users/" + buyerId)
      .then(({data}) => {
        if(data.is_success) {
          setBuyerName(data.contents[0].firstName + " " + data.contents[0].lastName);
          setSellerName(props.sellerName);
        }
      })
    }
  })

  return(
    <div className="main-container"> 
      {
        areValuesSet ? 
        (
          <Card className="card-container">
            <CardContent>
              <div className="review-container">
                <Ratings
                  value={buyerRating}
                  optionalText="Customer"
                />
                <Typography component="legend"> <span className="name">{buyerName}</span></Typography>
                {
                  buyerReview ?
                  (
                    <Typography component="h2"> <span className="message">{buyerReview}</span> </Typography>
                  )
                  :
                  (
                    <div></div>
                  )
                }
                <br/>
                <Typography component="h2"> <span className="name">{sellerName}</span> </Typography>
                {
                  sellerReply ?
                  (
                    <Typography component="h2"> <span className="message">{sellerReply}</span> </Typography>
                  )
                  :
                  (
                    // Add post to submit reply
                    <div></div>
                  )
                }
              </div>
            </CardContent>
          </Card>
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

export default Review;