import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import "../../css/ContainerDetails.css"

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: "95%",
  },
  image: {
  // try important in css file
    width: "100%",
    height: "100%",
  },
}));

const ContainerDetailsPage = (props) => {
  const classes = useStyles();

  // console.log(props.description);

  return (
    <div className="container">
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <ButtonBase className={classes.image}>
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
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Add to Cart
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default ContainerDetailsPage;