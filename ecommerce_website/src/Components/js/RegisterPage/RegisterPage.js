
import axios from "axios";
import FormData from 'form-data'
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

class Register extends Component {
    state = {
        firstName: null,
        lastName: null,
        email: null,
        primaryAddress: null,
        alternateAddress: null,
        password: null,
        repeat_password: null,
        imageUrl: null,
    };

    // A function that vaildates input and changes the state of my attributes. 
    handleChange = (input) => e => {
        e.preventDefault();

        if ([input] == 'firstName' && e.target.value.length != 0) {
            this.setState({ [input]: e.target.value });
        }
        else if ([input] == 'lastName' && e.target.value.length != 0) {
            this.setState({ [input]: e.target.value });
        }
        else if ([input] == 'email' && emailRegex.test(e.target.value) == true) {
            this.setState({ [input]: e.target.value });
        }
        else if ([input] == 'primaryAddress') {
            this.setState({ primaryAddress: e.target.value });
        }
        else if ([input] == 'alternateAddress') {
            this.setState({ alternateAddress: e.target.value });
        }
        else if ([input] == 'imageUrl') {
            this.setState({ imageUrl: e.target.files[0] });
        }
        else if ([input] == 'password' && e.target.value.length != 0) {
            this.setState({ [input]: e.target.value });
        }
        else if ([input] == 'repeat_password' && e.target.value.length != 0) {
            this.setState({ [input]: e.target.value });
        }
        else
            this.setState({ [input]: null });
    };

    // A function that console logs the fields of the form
    print = () => {
        console.log(this.state.firstName)
        console.log(this.state.lastName)
        console.log(this.state.email)
        console.log(this.state.primaryAddress)
        console.log(this.state.alternateAddress)
        console.log(this.state.password)
        console.log(this.state.repeat_password)
        console.log(this.state.imageUrl)
    };

    // A function that submits the form to the backend (restAPI)
    submit = () => { 
        // if condition to make sure all the required fields have some input (some value)
        if (this.state.firstName != null && this.state.lastName != null && this.state.email != null && this.state.primaryAddress != null && this.state.imageUrl != null && this.state.password != null && this.state.password == this.state.repeat_password) {

            const formData = new FormData();
            formData.append('firstName:', this.state.firstName);
            formData.append('lastName:', this.state.lastName);
            formData.append('email:', this.state.email);
            formData.append('primaryAddress:', this.state.primaryAddress);
            formData.append('alternateAddress:', this.state.alternateAddress);
            formData.append('password:', this.state.password);
            formData.append('repeat_password:', this.state.repeat_password);
            formData.append('imageUrl', this.state.imageUrl, this.state.imageUrl.name) ;

            for (var key of formData.entries()) {
                console.log(key[0] + ' , ' + key[1])
            }

            // Sending the form to the backend 
            axios.post('https://rocky-shore-99218.herokuapp.com/users', formData, {})
                .then(function (response) {
                    if (response.data.is_success) {
                        console.log("success");
                        // If successful then we need to store the response.data.contents obeject somewhere
                        // console.log(response.data.contents[0]);
                    } else {
                        console.log(response.data.message);
                    }
                    console.log(response)
                    console.log('SUCCESS!!');
                })
                .catch(function (response) {
                    console.log(response);
                    console.log('FAILURE!!');

                });
        } 
      
    }

    // rendering the actually form 
    render() {
        return (
            <Container component="main" maxWidth="xs">
                <form noValidate>
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
                                defaultValue={this.props.lastName}
                                onChange={this.handleChange('lastName')}
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        required
                        fullWidth="true"
                        variant="outlined"
                        label="Email"
                        id="email_field"
                        placeholder="Enter Your Email"
                        defaultValue={this.props.email}
                        onChange={this.handleChange('email')}
                    /> <br />
                    <TextField
                        required
                        margin="normal"
                        fullWidth="true"
                        variant="outlined"
                        label="Primary Address"
                        placeholder="Enter Your Primary Address"
                        defaultValue={this.props.primaryAddress}
                        onChange={this.handleChange('primaryAddress')}
                    /><br />
                    <TextField
                        margin="normal"
                        fullWidth="true"
                        variant="outlined"
                        label="Alternate Address"
                        placeholder="Enter Alternate Address"
                        defaultValue={this.props.alternateAddress}
                        onChange={this.handleChange('alternateAddress')}
                    /><br />
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
                    />
                    <TextField
                        required
                        margin="normal"
                        fullWidth="true"
                        type="password"
                        variant="outlined"
                        label="Re-enter Your Password"
                        placeholder="Re-enter Your Password"
                        defaultValue={this.props.repeat_password}
                        onChange={this.handleChange('repeat_password')}
                    /> <br />
                    <input id="image_id" type="file" onChange={this.handleChange('imageUrl')} />
                    <br /> <br />
                    <Button
                        fullWidth="true"
                        color="primary"
                        variant="contained"
                        onClick={this.submit}
                    > Confirm
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2" /* onClick={ } */> Already have an account? Sign in  </Link>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        );
    }
}
export default Register;

/*
error
id="standard-error"
label="Error"
*/