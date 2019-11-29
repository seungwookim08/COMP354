import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Ratings from "./Ratings";
import Review from "./Review";
import Pagination from "material-ui-flat-pagination"
import {addItem} from '../../../Redux/cart/cart.actions';
import {connect} from 'react-redux';
import "../../css/ContainerDetails.css";
import "../../css/SellerDetails.css";
import axios from "axios";


// Basic style for paper - can't retrieve 'theme.spacing(2)' inside css file
const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: "95%",
    minHeight: "100%",
  },
}));

const SellerDetails = props => {
  const classes = useStyles();
  const [sellerFullName, setSellerFullName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [sellerProfilePic, setSellerProfilePic] = useState("");
  const [sellerRating, setSellerRating] = useState("");
  const [reviewContents, setReviewContents] = useState("");
  const [amountOfBuyerReviews, setAmountOfBuyerReviews] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [amountOfRowsPerPage] = useState(2);
  const [reviewsPerRow] = useState(4);

  // .get('https://rocky-shore-99218.herokuapp.com/users/' + props.location.state.sellerId)
  // props.location.state.sellerId

  // retrieve specific details about the seller
  useEffect(() => {
    axios
    .get('https://rocky-shore-99218.herokuapp.com/users/' + 2)
    .then(({data}) => {
      if(data.is_success) {
        setSellerFullName(data.contents[0].firstName + " " + data.contents[0].lastName);
        setSellerEmail(data.contents[0].email);
        setSellerProfilePic(data.contents[0].imageUrl);
      }
    });
  }, []);

  // retrieve ratings and reviews of the seller
  useEffect(() => {
    axios
    .get('https://rocky-shore-99218.herokuapp.com/seller/' + 2 + "/ratings")
    .then(({data}) => {
      if(data.is_success) {
        console.log("data contents" + data.contents);
        setSellerRating(computeAverageRating(data.contents));
        setReviewContents(data.contents);
      }
    });
  }, []);

  function computeAverageRating(contents) {
    var total = 0, count = 0;
    contents.map(content => {
      count++;
      total += content.rate;
    })
    setAmountOfBuyerReviews(count);
    return total/count;
  }

  function computeTotalRows() {
    if(amountOfBuyerReviews) {
      return Math.ceil(amountOfBuyerReviews/reviewsPerRow);
    } else {
      return 0;
    }
  }

  function retrieveUserId(content) {
    console.log("user id: " + content.userId);
    return content.userId;
  }

  function retrieveBuyerReview(content) {
    console.log("review: " + content.text);
    return content.text;
  }

  function retrieveSellerReply(content) {
    console.log("reply: " + content.sellerText);
    return content.sellerText;
  }

  function retrieveBuyerRating(content) {
    console.log("rating: " + content.rate);
    return content.rate;
  }

  function updatePageNumber(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function loadNewReviews() {

  }

  return (
    <div className="container">
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs ={12} sm={4}>
            <ButtonBase className="image">
              <img className="img" alt="seller image" src={sellerProfilePic} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm={8} container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {sellerFullName}
                  </Typography>
              </Grid>
              <Grid item>
                 <Typography variant="body2">
                    Seller: {sellerFullName}
                  </Typography>
               </Grid>
               <Grid item>
                 <Typography variant="body2">
                    Email: {sellerEmail}
                  </Typography>
               </Grid>
               <Grid item>
                 <Typography variant="body2">
                   <Ratings 
                    value={sellerRating}
                    optionalText="Seller"
                   />
                  </Typography>
               </Grid>
            </Grid>
          </Grid>
          <Grid container xs={12} className="grid-container" spacing={2}>
          {
            reviewContents ?
            (
              reviewContents.map(contents => (
                <Grid item xs={12} sm={6} md={3}>
                  <Review
                    buyerId={retrieveUserId(contents)}
                    buyerReview={retrieveBuyerReview(contents)}
                    buyerRating={retrieveBuyerRating(contents)}
                    sellerName={sellerFullName}
                    sellerReply={retrieveSellerReply(contents)}
                  />
                </Grid>
              ))
            )
            :
            (
              <div>{/*Empty Container*/}</div>
            )
          }
          </Grid>
        </Grid>
        <Pagination
          size = 'large'
          limit={amountOfRowsPerPage}
          total={computeTotalRows()}
          offset={currentPage}
          onClick={(e, offset)=>updatePageNumber(offset)}
        />
      </Paper>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(SellerDetails);