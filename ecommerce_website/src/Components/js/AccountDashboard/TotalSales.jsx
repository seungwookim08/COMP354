
import React, {useState, useEffect} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import axios from 'axios';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function TotalSales(props) {

  const[totalSales, setTotalSales] = useState(0);
  const [totalUnits, setTotalUnits] = useState(0);

  useEffect(() => {
    let url = `https://rocky-shore-99218.herokuapp.com/users/${props.sellerId}/stats/`;
    axios
        .get(url)
        .then(({ data }) => {
            if (data.is_success) {
                setTotalSales(data.contents.totalRevenue);
                setTotalUnits(data.contents.totalUnits);
            }
        });
});

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total Sales</Title>
      <Typography component="p" variant="h4">
        ${totalSales}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        from {totalUnits} products sold
      </Typography>
      <div>
      </div>
    </React.Fragment>
  );
}