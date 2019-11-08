
import axios from "axios";
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import ForgetPassword from "./ForgetPassword.js";
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { setCurrentUser } from '../../../Redux/user/user.actions';
import { connect } from 'react-redux';

const Login = ({ setCurrentUser }) => {

  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // A function that vaildates input and then changes state 
  const handleChange = (input) => e => {

    if ([input] == 'email' && emailRegex.test(e.target.value) == true) {
      setEmail(e.target.value);
    }
    else if ([input] == 'password' && e.target.value.length != 0) {
      setPassword(e.target.value);
    }
    else {
      setEmail(null);
      setPassword(null);
    }

  };

  // A function that submits the form to the backend (restAPI)
  const submit = () => {

    // if condition to make sure all the required fields have some input (some value)
    if (email != null && password != null) {

      axios.post('https://rocky-shore-99218.herokuapp.com/login', {
        email: email,
        password: password,
      })
        .then(function (response) {
          // The servers response 
          if (response.data.is_success) {
            console.log(response);
            // If successful then we need to store the response.data.contents obeject   
            // console.log(response.data.contents[0]);
            // console.log(response.data.contents[0].email);
            setCurrentUser(response.data.contents[0]);
          } else {
            console.log(response.data.message);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    else
      console.log("not vaild");

    print();
  }

  // A function that console logs the fields of the form
  const print = () => {
    console.log(email)
    console.log(password)
  };

  // rendering the actually form 

  return (
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
          defaultValue=""
          onChange={handleChange('email')}
        /> <br />
        <TextField
          required
          margin="normal"
          fullWidth="true"
          type="password"
          variant="outlined"
          label="Password"
          placeholder="Enter A Password"
          defaultValue=""
          onChange={handleChange('password')}
        /> <br />
        <Button
          fullWidth="true"
          color="primary"
          variant="contained"
          onClick={submit}
        > Sign In
          </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <ForgetPassword/>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(Login);

/*
 <Link href="#" variant="body2"  > Forgot your password ? </Link>
*/