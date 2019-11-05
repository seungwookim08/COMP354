
import axios from "axios";
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router';


const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class Login extends Component {
  
  state = {
    email: null,
    password: null,
    redirect: false,
  };

  constructor(props) {
    console.log("constructor Login: Props: " + props);
    super(props);
    this.state = {
      email: props.email,
      password: props.password,
      redirect: props.redirect,
    }
    this.checkIfUserIsLoggedIn = this.checkIfUserIsLoggedIn.bind(this);
  }

  checkIfUserIsLoggedIn() {
    console.log("checkIfUserIsLoggedIn in called from login");
    this.props.checkIfUserIsLoggedIn();
  }

  // A function that vaildates input and then changes state 
  handleChange = (input) => e => {

    if ([input] == 'email' && emailRegex.test(e.target.value) == true) {
      this.setState({ [input]: e.target.value });
    }
    else if ([input] == 'password' && e.target.value.length != 0) {
      this.setState({ [input]: e.target.value });
    }
    else
      this.setState({ [input]: null });
  };

  // A function that submits the form to the backend (restAPI)
  submit = () => {
    // if condition to make sure all the required fields have some input (some value)
    if (this.state.email != null && this.state.password != null ){

      // Need to hold reference to current component
      let currentComponent = this;

      axios.post('https://rocky-shore-99218.herokuapp.com/login', {
        email: this.state.email,
        password: this.state.password,
      })
        .then(function (response) {
           // The servers response 
          console.log(response.data.message);
          if(response.data.is_success) {
            console.log(response.data.contents[0]);
            localStorage.setItem("userId", response.data.contents[0].id);
            // Set current component redirect value to change current position to home page after user logs in

            console.log(localStorage.getItem("userId"));

            currentComponent.setState({
              redirect: true
            });

            currentComponent.checkIfUserIsLoggedIn();
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    else
      console.log("not vaild")
    this.print();
  }

  // A function that console logs the fields of the form
  print = () => {
    console.log(this.state.email)
    console.log(this.state.password)
  };

  // rendering the actually form 
  render() {
    return (
      <div>
        {
          this.state.redirect ?
          (
            <Redirect push to="/" />
          )
          :
          (
            <Container component="main" maxWidth="xs">
              <form noValidate>
                <Typography align="center" component="h1" variant="h5"> Sign In </Typography>
                <TextField
                  required
                  margin="normal"
                  fullWidth="true"
                  variant="outlined"
                  label="Email"
                  placeholder="Enter Your Email"
                  defaultValue={this.props.email}
                  onChange={this.handleChange('email')}
                /> <br />
                <TextField
                  required
                  margin="normal"
                  fullWidth="true"
                  type="password"
                  variant="outlined"
                  label="Password"
                  placeholder="Enter A Password"
                  defaultValue={this.props.password}
                  onChange={this.handleChange('password')}
                /> <br />
                <Button
                  fullWidth="true"
                  color="primary"
                  variant="contained"
                  onClick={this.submit}
                > Sign In
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2" /* onClick={ } */ > Forgot your password ? </Link>
                  </Grid>
                </Grid>
              </form>
            </Container>
          )
        }
      </div>
    );
  }
}

export default Login;

/*
error
id="standard-error"
label="Error"
*/