import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: "95%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm={8} container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Item Name
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Item Description
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Item ID
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Price
                </Typography>
              </Grid>
              <Grid item>
                 <Typography variant="body2">
                   Ratings
                  </Typography>
               </Grid>
               <Grid item>
                 <Typography variant="body2" color="textSecondary">
                   Customer Reviews
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





// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     margin: 'auto',
//     maxWidth: "95%",
//     maxHeight: "100%",
//   },
//   image: {
//     width: 256,
//     height: 512,
//   },
//   img: {
//     // margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
//   },
// }));

// export default function ComplexGrid() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Paper className={classes.paper}>
//         <Grid container spacing={2}>
//           <Grid item sm={6}>
//             <ButtonBase className={classes.image}>
//               <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
//             </ButtonBase>
//           </Grid>
//           <Grid item sm={6} spacing={2}>
//             <Grid item spacing={2}>
//               <Grid item>
//                 <Typography gutterBottom variant="subtitle1">
//                   Item Name
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   Item Description
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Item ID: 1030114
//                 </Typography>
//               </Grid>
//               <Grid item>
//                 <Typography variant="subtitle1">Price</Typography>
//               </Grid>
//             </Grid>
//             {/* <Grid item sm={2} spacing={2}>
//               <Grid item>
//                 <Typography variant="subtitle1">Ratings</Typography>
//               </Grid>
//               <Grid item>
//                 <Typography variant="subtitle2">Customer Reviews</Typography>
//               </Grid>
//             </Grid> */}
//             {/* <Grid item>
//               <Typography variant="body2" style={{ cursor: 'pointer' }}>
//                 Add to Cart
//               </Typography>
//             </Grid> */}
//           </Grid>
//         </Grid>
//       </Paper>
//     </div>
//   );
// }