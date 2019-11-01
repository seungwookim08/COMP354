import React from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import "../../css/ProfilePage.css"
import axios from "axios";

class ProfilePage extends React.Component {

  state = {
    userContents: "",
    userId: "",
    profileImageUrl: "",
    firstName: "",
    lastName: "",
    primaryAddress: "",
    alternateAddress: "",
    emailAddress: ""
  }

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
      emailAddress: props.emailAddress
    }
  }

  getUserInfo() {
    axios
    .get('https://rocky-shore-99218.herokuapp.com/users/' + "1")
    .then(({data}) => {
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

  useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  render() {
    return(
      <div className="container">
        <div>
        {/* <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          className="text-field"
          margin="normal"
          variant="outlined"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
          className="text-field"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          className="text-field"
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          className="text-field"
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          className="text-field"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          className="text-field"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          className="text-field"
          helperText="Some important text"
          margin="normal"
          variant="outlined"
        /> */}
      </div>
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
                    InputProps={{
                      readOnly: true,
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
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs>  
                  <TextField
                    id="outlined-read-only-input"
                    label="Email Address"
                    defaultValue="Email Address"
                    className="text-field"
                    margin="normal"
                    value={this.state.emailAddress}
                    InputProps={{
                      readOnly: true,
                    }}
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
                    value={this.state.primaryAddress}
                    InputProps={{
                      readOnly: true,
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
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper className="paper">
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
                      readOnly: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs>  
                  <TextField
                    id="outlined-read-only-input"
                    label="Email Address"
                    defaultValue="Email Address"
                    className="text-field"
                    margin="normal"
                    value="Coming Soon"
                    InputProps={{
                      readOnly: true,
                    }}
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
                      readOnly: true,
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
                      readOnly: true,
                    }}
                    variant="outlined"
                  />
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