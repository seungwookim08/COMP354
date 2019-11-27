import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import Header  from "../UserCart/Header";
import {connect} from 'react-redux';
import {useState} from 'react';
import {logoutCurrentUser} from '../../../Redux/user/user.actions';
import logo from '../../../ImageAssets/logo_smaller.svg';
import "../../css/NavBar.css";

const NavBar = ({currentUser, logoutCurrentUser}) => {
  const [navItemValue,setNavItemValue] = useState(1);
  const [homePageIndex] = useState(1);
  const [checkoutPageIndex] = useState(2);
  const [profilePageIndex] = useState(3);
  const [registerPageIndex] = useState(3);
  const [loginPageIndex] = useState(4);
  const [dashboardPageIndex] = useState(4);
  const [aboutPageIndexOne] = useState(5);
  const [aboutPageIndexTwo] = useState(6);
  const [localHostString] = useState("http://localhost:3000");
  const [homePageString] = useState("/");
  const [checkoutPageString] = useState("/checkout");
  const [profilePageString] = useState("/profile");
  const [dashboardPageString] = useState("/dashboard");
  const [registerPageString] = useState("/RegisterPage");
  const [loginPageString] = useState("/Login");
  const [aboutPageString] = useState("/about");

  const handleChange = (event, newValue) => {
    console.log("event of nav item click: " + event);
    console.log("index of nav item: " + newValue);
    setNavItemValue(parseInt(newValue));
  };

  const setIndexOfNavLocation = (currentLocation) => {
    if(currentLocation == (localHostString + homePageString)) {
      setNavItemValue(homePageIndex);
    }
    else if(currentLocation == (localHostString + checkoutPageString)) {
      setNavItemValue(checkoutPageIndex);
    }
    else if(currentLocation == (localHostString + profilePageString)) {
      setNavItemValue(profilePageIndex);
    }
    else if(currentLocation == (localHostString + dashboardPageString)) {
      setNavItemValue(dashboardPageIndex);
    }
    else if(currentLocation == (localHostString + registerPageString)) {
      setNavItemValue(registerPageIndex);
    }
    else if(currentLocation == (localHostString + loginPageString)) {
      setNavItemValue(loginPageIndex);
    }
    else if(currentUser && currentLocation == (localHostString + aboutPageString)) {
      setNavItemValue(aboutPageIndexTwo);
    } 
    else if(!currentUser && currentLocation == (localHostString + aboutPageString)) {
      setNavItemValue(aboutPageIndexOne)
    }
    else {
      console.log("Error: Not a recognized url");
    }
  }

  useEffect(() => {
    let currentLocation = window.location.href;
    console.log("Current location: " + currentLocation);
    setIndexOfNavLocation(currentLocation);
  });

    return(
      <div className="navigation-bar">
        <AppBar position="static">
            {
              currentUser ? 
              (
                <Tabs
                  className="nav-items"
                  variant="fullWidth"
                  value={navItemValue}
                  aria-label="nav tabs example"
                  onChange={e => handleChange(e, e.target.parentElement.getAttribute("index"))}
                  TabIndicatorProps={{style: {backgroundColor: "black", height:"3px"}}}
                >
                  <Tab className="no-hover" icon={<img class="logo_top_left" src={logo}/>} />
                  <Tab label="Home" component={Link} to={homePageString} index={homePageIndex}/>
                  <Tab label="Checkout" component={Link} to={checkoutPageString} index={checkoutPageIndex}/>
                  <Tab label="Profile" component={Link} to={profilePageString} index={profilePageIndex}/>
                  <Tab label="Seller Dashboard" component={Link} to={dashboardPageString} index={dashboardPageIndex}/>
                  {<Tab label="Logout" component={Link} to={homePageString} onClick={() => logoutCurrentUser()}/> }
                  <Tab label="About" component={Link} to={aboutPageString} index={aboutPageIndexTwo}/>
                </Tabs>
              )
              :
              (
                <Tabs
                  className="nav-items"
                  variant="fullWidth"
                  value={navItemValue}
                  aria-label="nav tabs example"
                  onChange={e => handleChange(e, e.target.parentElement.getAttribute("index"))}
                  TabIndicatorProps={{style: {backgroundColor: "black", height:"3px"}}}
                >
                  <Tab className="no-hover" icon={<img class="logo_top_left" src={logo}/>}  />
                  <Tab label="Home" component={Link} to={homePageString} index={homePageIndex}/>
                  <Tab label="Checkout" component={Link} to={checkoutPageString} index={checkoutPageIndex}/>
                  <Tab label="Sign Up" component={Link} to={registerPageString} index={registerPageIndex}/>
                  <Tab label="Login" component={Link} to={loginPageString} index={loginPageIndex}/>
                  <Tab label="About" component={Link} to={aboutPageString} index={aboutPageIndexOne}/>
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
