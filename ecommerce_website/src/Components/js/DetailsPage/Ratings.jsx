import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "../../css/Ratings.css";

const Ratings = props => {
  return (
    <div className="rating-container">
      <Box className="rating-box" component="fieldset" mb={3} borderColor="transparent">
        <Typography className="rating-text" component="legend">Ratings</Typography>
        <Rating className="rating-component" name="read-only" value={props.value} readOnly precision={0.25}/>
      </Box>
    </div>
  );
}

export default Ratings;