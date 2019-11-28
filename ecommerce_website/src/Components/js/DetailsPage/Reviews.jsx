import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const Reviews = (props) => {
  const[reviews, setReviews] = useState();

  useEffect(() => {
    if(props.reviews) {
      setReviews(props.reviews);
    }
  })

  return(
    <div> 
      {
        reviews ? 
        (
          reviews.map(review => (
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2"> {review} </Typography>
              </CardContent>
            </Card>
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