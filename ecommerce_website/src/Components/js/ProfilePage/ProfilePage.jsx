import React, {useState}from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "../../css/ProfilePage.css";
import axios from "axios";
import {connect} from 'react-redux';
import {selectUser} from '../../../Redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';

 const ProfilePage = ({user}) => {

  const [firstName,setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [imageUrl, setImageUrl] = useState(user.imageUrl);
  const [primaryAddress, setPrimaryAddress] = useState(user.primaryAddress);
  const [alternateAddress, setAlternateAddress] = useState(user.alternateAddress);
  const [emailAddress, setEmailAddress] = useState(user.currentUser);
  const [currentUser, setCurrentuser] = useState(user.currentUser);
  
  
 


  function setUserInfo() {

    const formData = new FormData();
    formData.append("imageUrl", imageUrl);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("primaryAddress", primaryAddress);
    formData.append("alternateAddress", alternateAddress);
    formData.append("emailAddress", emailAddress);
    
    axios.post('https://rocky-shore-99218.herokuapp.com/users/' + user.sellerId, formData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="container">
    <Paper className="paper">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
         <img alt="User Profile Image" src={imageUrl}/>
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
                value={firstName}
                onChange={e => 
                  setFirstName(e.target.value)
                }
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
                value={lastName}
                onChange={e => 
                  setLastName(e.target.value)
                }
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
                value={currentUser}
              />
            </Grid>
            <Grid item xs>
              <TextField
                id="outlined-read-only-input"
                label="Primary Address"
                defaultValue="Primary Address"
                className="text-field"
                margin="normal"
                value={primaryAddress}
                onChange={e => 
                  setPrimaryAddress(e.target.value)
                }
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
                value={alternateAddress}
                onChange={e => 
                  setAlternateAddress(e.target.value)
                }
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
            variant="contained" 
            style={{
              margin: "25px"
            }}
            onClick={e=>{setUserInfo();}}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Paper>
    </div>
  );
}
 
const mapStateToProps = createStructuredSelector({
  user:selectUser
})

export default connect(mapStateToProps)(ProfilePage);