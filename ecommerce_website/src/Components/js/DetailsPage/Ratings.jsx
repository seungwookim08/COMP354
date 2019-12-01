import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "../../css/Ratings.css";

const Ratings = props => {
  const[totalRatings, setTotalRatings] = useState();

  useEffect(() => {
    setTotalRatings(props.totalRatings);
  })

  return (
    <div className="rating-container">
      <Box className="rating-box" borderColor="transparent">
        <Typography className="rating-text" component="legend">{props.optionalText} Rating: {props.value}</Typography>
        <Rating className="rating-component" name="read-only" value={props.value} readOnly precision={0.25}/>
        {
          totalRatings ? 
          (
            <Typography variant="body2" component="legend">{totalRatings} ratings</Typography>
          )
          :
          (
            <div>{/* Empty Container */}</div>
          )
        }
      </Box>
    </div>
  );
}

export default Ratings;