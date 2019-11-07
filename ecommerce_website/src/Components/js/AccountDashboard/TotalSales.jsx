
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function TotalSales() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total Sales</Title>
      <Typography component="p" variant="h4">
        $0
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        from 0 amount of products sold
      </Typography>
      <div>
      </div>
    </React.Fragment>
  );
}