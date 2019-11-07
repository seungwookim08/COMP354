import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "../../css/ProfilePage.css"
import axios from "axios";

class ProfilePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userContents: props.userContents,
      userId: props.userID,
      profileImageUrl: props.profileImageUrl,
      firstName: props.firstName,
      lastName: props.lastName,
      address: props.primaryAddress,
      alternateAddress: props.alternateAddress,
      emailAddress: props.emailAddress,
    }
  }

  // Called once rendering occurs
  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo() {
    axios
    .get('https://rocky-shore-99218.herokuapp.com/users/' + localStorage.getItem("userId"))
    .then(({data}) => {
      console.log("receiving data");
      if(data.is_success) {
        console.log("success");
        const tempData = data.contents[0];
        this.setState({
          userContents: tempData,
          profileImage: tempData.imageUrl,
          firstName: tempData.firstName,
          lastName: tempData.lastName,
          emailAddress: tempData.email,
          primaryAddress: tempData.primaryAddress,
          alternateAddress: tempData.alternateAddress,
        });
      } else {
        console.log("error");
      }
    });
  }

  setUserInfo() {
    // TODO: Change id to userID rather than '1'
    axios.post('https://rocky-shore-99218.herokuapp.com/users/' + "1", {
      imageUrl: this.state.profileImageUrl,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      primaryAddress: this.state.primaryAddress,
      alternateAddress: this.state.alternateAddress,
      emailAddress: this.state.emailAddress
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return(
      <div className="container">
        <Paper className="paper">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
             <img alt="User Profile Image" src={this.state.profileImageUrl}/>
            </Grid>
            <Grid item xs={12} sm={8} container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <TextField
                    id="outlined-read-only-input"
                    label="First Name"
                    defaultValue="First Name"
                    className="text-field"
                    margin="normal"
                    value={this.state.firstName}
                    onChange={e => {
                      this.setState({
                        firstName: e.target.value
                      })
                    }}
                    InputProps={{
                      readOnly: false,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    id="outlined-read-only-input"
                    label="Last Name"
                    defaultValue="Last Name"
                    className="text-field"
                    margin="normal"
                    value={this.state.lastName}
                    onChange={e => {
                      this.setState({
                        lastName: e.target.value
                      })
                    }}
                    InputProps={{
                      readOnly: false,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs>  
                  <TextField
                    disabled
                    id="outlined-disabled"
                    label="Email Address"
                    defaultValue="Email Address"
                    className="text-field"
                    margin="normal"
                    variant="outlined"
                    value={this.state.emailAddress}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    id="outlined-read-only-input"
                    label="Primary Address"
                    defaultValue="Primary Address"
                    className="text-field"
                    margin="normal"
                    value={this.state.primaryAddress}
                    onChange={e => {
                      this.setState({
                        primaryAddress: e.target.value
                      })
                    }}
                    InputProps={{
                      readOnly: false,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    id="outlined-read-only-input"
                    label="Alternate Address"
                    defaultValue="Alternate Address"
                    className="text-field"
                    margin="normal"
                    value={this.state.alternateAddress}
                    onChange={e => {
                      this.setState({
                        alternateAddress: e.target.value
                      })
                    }}
                    InputProps={{
                      readOnly: false,
                    }}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button 
                disabled
                variant="contained" 
                style={{
                  margin: "25px"
                }}
                onClick={e => this.setUserInfo()}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Paper>
        {/* <Paper className="paper">
          <Grid container spacing={2}>
            <Grid item sm={4}>
             <img alt="Seller Profile Image" src={this.state.profileImageUrl}/>
            </Grid>
            <Grid item xs={12} sm={8} container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <TextField
                    id="outlined-read-only-input"
                    label="Business Name"
                    defaultValue="Business Name"
                    className="text-field"
                    margin="normal"
                    value="Coming Soon"
                    InputProps={{
                      readOnly: false,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs>  
                  <TextField
                    disabled
                    id="outlined-disabled"
                    label="Email Address"
                    defaultValue="Email Address"
                    className="text-field"
                    margin="normal"
                    value="Coming Soon"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    id="outlined-read-only-input"
                    label="Primary Address"
                    defaultValue="Primary Address"
                    className="text-field"
                    margin="normal"
                    value="Coming Soon"
                    InputProps={{
                      readOnly: false,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    id="outlined-read-only-input"
                    label="Alternate Address"
                    defaultValue="Alternate Address"
                    className="text-field"
                    margin="normal"
                    value="Coming Soon"
                    InputProps={{
                      readOnly: false,
                    }}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button 
                disabled
                variant="contained" 
                style={{
                  margin: "25px"
                }}
                onClick={e => this.setUserInfo()}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Paper> */}
      </div>
    );
  }
}

export default ProfilePage;