import React from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from "axios";

class ProfilePage extends React.Component {

  state = {
    userContents: "",
    userId: "",
    firstName: "",
    lastName: "",
    address: "",
    emailAddress: "",
  }

  constructor(props) {
    super(props);
    this.state = {
      userContents: [],
      userId: [],
      firstName: [],
      lastName: [],
      address: [],
      emailAddress: []
    }
  }

  getUserInfo() {
    axios
    .get('https://rocky-shore-99218.herokuapp.com/users/' + "1")
    .then(({data}) => {
      if(data.is_success) {
        console.log("success")
        return data.contents[0];
      } else {
        console.log("error");
      }
    });
  }

  // Called right before componentDidMount
  componentWillMount() {
    // Retrieve data needed to fill in page
    this.setState((state,props) => ({
      userContents: this.getUserInfo()
    }));
  }

  // Called once rendering occurs
  componentDidMount() {
    console.log("in didMount" + this.userContents);
  }

  // Used for when values for the user are changed
  componentWillUpdate() {
    console.log("in will update" + this.userContents);
  }

  // <ButtonBase className="image">
  // <img className="img" alt="product image" src="" />
  // </ButtonBase>

  render() {
    return(
      <div className="container">
        <Paper>
          <Grid container spacing={2}>
            <Grid item sm={4}>
             image
            </Grid>
            <Grid item xs={12} sm={8} container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    name
                    </Typography>
                  <Typography variant="body2" gutterBottom>
                    description
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Category: 
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="textSecondary">
                    Seller: 
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
                <Grid item>
                  button
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default ProfilePage;