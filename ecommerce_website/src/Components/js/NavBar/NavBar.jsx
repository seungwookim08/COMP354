import React from 'react';
import "../../css/NavBar.css";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import Header  from "../UserCart/Header";
import {connect} from 'react-redux';
import {useState} from 'react';
import {logoutCurrentUser} from '../../../Redux/user/user.actions';
import logo from '../../../ImageAssets/logo_smaller.svg';

const NavBar = ({currentUser, logoutCurrentUser}) => {

  const [value,setValue] = useState(1);

  const handleChange = (event, newValue) => {
    console.log(event);
    console.log(newValue);
    setValue(newValue);
  };

    return(
      <div className="navigation-bar">
        <AppBar position="static">
            {
              currentUser ? 
              (
                <Tabs
                  className="nav-items"
                  variant="fullWidth"
                  value={value}
                  aria-label="nav tabs example"
                  onChange={handleChange}
                  TabIndicatorProps={{style: {backgroundColor: "black", height:"3px"}}}
                >
                  <Tab className="no-hover" icon={<img class="logo_top_left" src={logo}/>}  />
                  <Tab label="Home" component={Link} to="/"/>
                  <Tab label="Checkout" component={Link} to={"/checkout"} />
                  <Tab label="Profile" component={Link} to={"/profile"} />
                  <Tab label="Seller Dashboard" component={Link} to={"/dashboard"} />
                  {<Tab label="Logout" onClick={() => logoutCurrentUser()}/> }
                  <Tab label="About" component={Link} to={"/about"} />
                </Tabs>
              )
              :
              (
                <Tabs
                  className="nav-items"
                  variant="fullWidth"
                  value={value}
                  aria-label="nav tabs example"
                  onChange={handleChange}
                  TabIndicatorProps={{style: {backgroundColor: "black", height:"3px"}}}
                >
                  <Tab className="no-hover" icon={<img class="logo_top_left" src={logo}/>}  />
                  <Tab label="Home" component={Link} to="/"/>
                  <Tab label="Checkout" component={Link} to={"/checkout"} />
                  <Tab label="Sign Up" component={Link} to={"/RegisterPage"} />
                  <Tab label="Login" component={Link} to={"/Login"} />
                  <Tab label="About" component={Link} to={"/about"} />
                </Tabs>
              )
            }
        </AppBar>
        <div>
          <Header/>
        </div>
    </div>
    )
  }

  const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
  });

  const mapDispatchToProps = dispatch => ({
    logoutCurrentUser:() => dispatch(logoutCurrentUser())
  });

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
