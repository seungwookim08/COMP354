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

var db = "https://rocky-shore-99218.herokuapp.com/users/";
db = db.concat(134);

const SellerDetails = ({sellerId,imageUrl, name}) => {
  const classes = useStyles();
  const [sellerFullName, setSellerFullName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [sellerProfilePic, setSellerProfilePic] = useState("");

  // retrieve specific name for seller personal info
  useEffect(() => {
    axios
    .get(db)
    .then(({data}) => {
      if(data.is_success) {
        setSellerFullName(data.contents[0].firstName + " " + data.contents[0].lastName);
        setSellerEmail(data.contents[0].email)
        setSellerProfilePic(data.contents[0].imageUrl)
        //console
      }
    });
  });

  //console.log(id)

  return (
    <div className="container">
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <ButtonBase className="image">
              {/* TODO: Add props.imageURL */}
              <img className="img" alt="product image" src={"https://comp354-allan.s3.amazonaws.com/profiles/559948147d37f8c9a93aeb18c5e8d6c11573767799510.png"} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm={8} container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {name}
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
                   Ratings: coming soon
                  </Typography>
               </Grid>
               <Grid item>
                 <Typography variant="body2" color="textSecondary">
                   Customer Reviews: coming soon
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