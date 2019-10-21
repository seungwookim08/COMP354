
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

export default function SoldItems() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total Sales</Title>
      <Typography component="p" variant="h4">
        Amount of Sales
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        from X amount of products sold
      </Typography>
      <div>
        <Link color="primary" href="javascript:;">
         view breakdown here
        </Link>
      </div>
    </React.Fragment>
  );
}