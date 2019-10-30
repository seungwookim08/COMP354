import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import {addItem} from '../../../Redux/cart/cart.actions';
import {connect} from 'react-redux';
import "../../css/ContainerDetails.css"

// Basic style for paper - can't retrieve 'theme.spacing(2)' inside css file
const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: "95%",
  },
}));

const ContainerDetailsPage = (props) => {
  const classes = useStyles();

  return (
    <div className="container">
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <ButtonBase className="image">
              {/* TODO: Add props.imageURL */}
              <img className="img" alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm={8} container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.name}
                  </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.description}
                </Typography>
                {/* <Typography variant="body2" color="textSecondary">
                  {props.id}
                </Typography> */}
                <Typography variant="body2" color="textSecondary">
                  Category: {props.category}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Price: {props.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Seller: {props.sellerName}
                </Typography>
              </Grid>
              <Grid item>
                 <Typography variant="body2">
                   Ratings: {props.ratings}
                  </Typography>
               </Grid>
               <Grid item>
                 <Typography variant="body2" color="textSecondary">
                   Customer Reviews: {props.reviews}
                  </Typography>
               </Grid>
              <Grid item>
                <Button 
                  variant="contained" 
                  onClick={() => {
                    alert("clicked");
                    addItem(props);
                }}
                >
                  Add To Cart
                </Button>
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

export default connect(null, mapDispatchToProps)(ContainerDetailsPage);