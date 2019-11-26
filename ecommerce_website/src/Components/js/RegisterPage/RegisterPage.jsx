import axios from "axios";
import { Link } from 'react-router-dom';
import L from '@material-ui/core/Link';
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import  { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import HomePage from "../HomePage/HomePage";


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: props.firstName,
            lastName: props.lastName,
            email: props.email,
            primaryAddress: props.primaryAddress,
            alternateAddress: props.alternateAddress,
            password: props.password,
            repeat_password: props.repeat_password,
            imageUrl: props.imageUrl,
            errorCondition1: false, 
            errorCondition2: false, 
            errorCondition3: false, 
            errorCondition4: false, 
            errorCondition5: false, 
            errorCondition6: false,            
        }
    }

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
        else if ([input] == 'password' && e.target.value.length != 0 &&  e.target.value.length > 7) {
            this.setState({ [input]: e.target.value });
        }
        else if ([input] == 'repeat_password' && e.target.value.length != 0 && e.target.value.length > 7) {
            this.setState({ [input]: e.target.value });
        }
        else {
            this.setState({ [input]: null });
        }
    };

    displayErrors1 = () => {
        if (this.state.firstName != null) {
            this.state.errorCondition1 = false;
        }
        else {
            this.state.errorCondition1 = true;
        }
    };

    displayErrors2 = () => {
        if (this.state.lastName != null) {
            this.state.errorCondition2 = false;
        }
        else {
            this.state.errorCondition2 = true;
        }
    };

    displayErrors3 = () => {
        if (emailRegex.test(this.state.email) == true) {
            this.state.errorCondition3 = false;
        }
        else {
            this.state.errorCondition3 = true;
        }
    };

    displayErrors4 = () => {
        if (this.state.primaryAddress != null) {
            this.state.errorCondition4 = false;
        }
        else 
            this.state.errorCondition4 = true;
            
    };
    displayErrors5 = () => {
        if (this.state.password != null) {
            this.state.errorCondition5 = false;
        }
        else 
            this.state.errorCondition5 = true;
            
    };
    displayErrors6 = () => {
        if ((this.state.password != null &&  this.state.repeat_password != null) && this.state.password == this.state.repeat_password ) {
            this.state.errorCondition6 = false;
        }
        else 
            this.state.errorCondition6 = true;
            
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

        this.displayErrors1();
        this.displayErrors2();
        this.displayErrors3();
        this.displayErrors4();
        this.displayErrors5();
        this.displayErrors6();

        // if condition to make sure all the required fields have some input (some value)
        if (this.state.firstName != null && this.state.lastName != null && this.state.email != null && this.state.primaryAddress != null && this.state.imageUrl != null && this.state.password != null && this.state.password == this.state.repeat_password) {

            const formData = new FormData();
            formData.append('firstName', this.state.firstName);
            formData.append('lastName', this.state.lastName);
            formData.append('email', this.state.email);
            formData.append('primaryAddress', this.state.primaryAddress);
            formData.append('alternateAddress', this.state.alternateAddress);
            formData.append('password', this.state.password);
            formData.append('repeat_password', this.state.repeat_password);
            formData.append('imageUrl', this.state.imageUrl, this.state.imageUrl.name);

            for (var key of formData.entries()) {
                console.log(key[0] + ' , ' + key[1])
            }

            // Sending the form to the backend 
            axios.post('https://rocky-shore-99218.herokuapp.com/users', formData, {})
                .then(function (response) {
                    if (response.data.is_success) {
                        console.log("success"); 
                        alert("Thank you for registering to 354TheStars. Check your email for a email conformation");
                        // Redirect Should Go Here
                    } else {
                        console.log(response.data.message);
                        alert("Something went wrong please try again");
                    }
                    console.log(response)
                    console.log('SUCCESS!!');
                })
                .catch(function (response) {
                    console.log(response);
                    console.log('FAILURE!!');
                });
        }
        else {
            alert("You have entered something invalid. Please try again. \nPlease make sure you have uploaded a profile picture.");
            this.forceUpdate();
            this.print();
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
                                error={this.state.errorCondition1}
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
                                error={this.state.errorCondition2}
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
                        error={this.state.errorCondition3}
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
                        error={this.state.errorCondition4}
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
                        error={this.state.errorCondition5}
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
                        error={this.state.errorCondition6}
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
                            <L variant="body2" label="Login" component={Link} to={"/Login"} > Already have an account? Sign in </L>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        );
    }
}
export default Register;
