import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {addItem} from '../../../Redux/cart/cart.actions';
import {connect} from 'react-redux';
import "../../css/ContainerDetails.css"
import axios from "axios";


// Basic style for paper - can't retrieve 'theme.spacing(2)' inside css file
const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: "95%",
  },
}));

const SellerDetails = props => {
  const classes = useStyles();
  const [sellerFullName, setSellerFullName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [sellerProfilePic, setSellerProfilePic] = useState("");
  const [sellerRating, setSellerRating] = useState("");
  const [sellerReviews, setSellerReviews] = useState("");

  // .get('https://rocky-shore-99218.herokuapp.com/users/' + props.location.state.sellerId)
  // props.location.state.sellerId

  // retrieve specific details about the seller
  useEffect(() => {
    console.log(props.location.state.sellerId);
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
        console.log(data.contents);
        setSellerRating(computeAverageRating(data.contents));
        retrieveReviews(data.contents);
      }
    });
  }, []);

  function computeAverageRating(contents) {
    var total = 0, count = 0;
    contents.map(content => {
      count++;
      total += content.rate;
    })
    return total/count;
  }

  function retrieveReviews(contents) {
    var messages = [];
    console.log("inside reviews function" + contents);
    contents.map(content => {
      messages.push(content.text)
      // setSellerReviews(sellerReviews.concat(content.text));
    })
    setSellerReviews(messages);
    console.log("All the seller's reviews: ");
  }

  return (
    <div className="container">
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item sm={4}>
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
                   Rating: {sellerRating}
                  </Typography>
               </Grid>
               <Grid item>
                 <Typography variant="body2" color="textSecondary">
                   Customer Reviews: {sellerReviews}
                  </Typography>
               </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(SellerDetails);