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
    profileImage: "",
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
      profileImage: [],
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
        console.log("success");
        console.log(data.contents[0]);
        const tempData = data.contents[0];
        this.setState({
          userContents: tempData,
          profileImage: tempData.imageUrl,
          firstName: tempData.firstName,
          lastName: tempData.lastName,
          emailAddress: tempData.email,
          address: tempData.primaryAddress,
        });
      } else {
        console.log("error");
      }
    });
  }

  // Called right before componentDidMount
  componentWillMount() {
  
  }

  // Called once rendering occurs
  componentDidMount() {
    this.getUserInfo();
  }

  // Used for when values for the user are changed
  componentWillUpdate() {

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
             <img alt="profile image" src={this.state.profileImage}/>
            </Grid>
            <Grid item xs={12} sm={8} container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    name: {this.state.firstName}
                    </Typography>
                  <Typography variant="body2" gutterBottom>
                    lastName: {this.state.lastName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Email: {this.state.emailAddress} 
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="textSecondary">
                    Address: {this.state.address} 
                  </Typography>
                </Grid>
                Seller Section with information
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default ProfilePage;