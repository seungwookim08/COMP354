import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export class UserDetails extends Component {
  state = {
    firstName: null,
    lastName: null,
    email: null,
    primaryAddress: null,
    alternateAddress: null,
    password: null,
  };
  
  // A function that changes state 
  handleChange = (input) => e => {
    console.log(e.target.value)
    this.setState({ [input]: e.target.value });
  };

  // A function that just checks to see if the state has been updated
  verify = () => {
    console.log("confirm" + this.state.firstName)
  };

  

 render() {
  return (
   <Container component="main" maxWidth="xs"> 
    <form > 
      <Typography align="center" component="h1" variant="h5"> Create Account </Typography> 
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              margin="normal"
              fullWidth="true"
              variant="outlined"
              label="First Name"
              placeholder="Enter Your First Name"
              defaultValue={this.props.firstName}
              //onChange={this.confirmed} 
              onChange={this.handleChange('firstName')}
            />
          </Grid> <br />
          <Grid item xs={12} sm={6}>
            <TextField
              required
              margin="normal"
              fullWidth="true"
              variant="outlined"
              label="Last Name"
              placeholder="Enter Your Last Name"
              onChange={this.handleChange('lastName')}
              defaultValue={this.props.lastName}
            />
          </Grid>
        </Grid>
            <TextField
              required
              margin="normal"
              fullWidth="true"
              variant="outlined"
              label="Email"
              placeholder="Enter Your Email"
              defaultValue={this.props.email}
            /> <br/>
            <TextField
              required
              margin="normal"
              fullWidth="true"
              variant="outlined"
              label="Primary Address"
              placeholder="Enter Your Primary Address"
            /><br/>
            <TextField
              margin="normal"
              fullWidth="true"
              variant="outlined"
              label="Alternate Address"
              placeholder="Enter Alternate Address"
            /><br/>
            <TextField
              required
              margin="normal"
              fullWidth="true"
              type="password"
              variant="outlined"
              label="Password"
              placeholder="Enter A Password"
            /> <br /> 
            <input className="Upload" type="file" /> <br /> <br />
            <Button
              fullWidth="true"  
              color="primary"
              variant="contained"
              onClick={this.confirmed}
            > Confirm
            </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2" onClick={this.verify()}> Already have an account? Sign in  </Link>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
}
export default UserDetails;

