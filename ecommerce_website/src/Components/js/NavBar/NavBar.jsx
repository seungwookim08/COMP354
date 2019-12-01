import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import Header  from "../UserCart/Header";
import {connect} from 'react-redux';
import {useState} from 'react';
import {logoutCurrentUser} from '../../../Redux/user/user.actions';
import logo from '../../../ImageAssets/logo_smaller.svg';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import "../../css/NavBar.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    position: "absolute",
    right: 0,
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = ({currentUser, logoutCurrentUser}) => {
  const [navItemValue,setNavItemValue] = useState(1);
  const [homePageIndex] = useState(1);
  const [checkoutPageIndex] = useState(2);
  const [profilePageIndex] = useState(3);
  const [registerPageIndex] = useState(3);
  const [loginPageIndex] = useState(4);
  const [dashboardPageIndex] = useState(4);
  const [aboutPageIndexOne] = useState(5);
  const [sellerDetailsPageIndex] = useState(6);
  const [aboutPageIndexTwo] = useState(7);
  const [localHostString] = useState("http://localhost:3000");
  const [homePageString] = useState("/");
  const [checkoutPageString] = useState("/checkout");
  const [profilePageString] = useState("/profile");
  const [sellerDetailsPageString] = useState("/SellerDetails");
  const [dashboardPageString] = useState("/dashboard");
  const [registerPageString] = useState("/RegisterPage");
  const [loginPageString] = useState("/Login");
  const [aboutPageString] = useState("/about");
  const [right, setRight] = useState(false);

  const classes = useStyles();

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
    else if(currentUser && currentLocation == (localHostString + sellerDetailsPageString)) {
      setNavItemValue(sellerDetailsPageIndex);
    }
    else if(currentUser && currentLocation == (localHostString + aboutPageString)) {
      setNavItemValue(aboutPageIndexTwo);
    } 
    else if(!currentUser && currentLocation == (localHostString + aboutPageString)) {
      setNavItemValue(aboutPageIndexOne)
    }
    else {
      console.log("Not a recognized url");
    }
  }

  useEffect(() => {
    let currentLocation = window.location.href;
    setIndexOfNavLocation(currentLocation);
  });

  const handleChange = (event, newValue) => {
    setNavItemValue(parseInt(newValue));
  };

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setRight(open);
  };

  const sideList = side => (
    // {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
    <div
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    > 
    {
      currentUser ?
      (
        <div>
          <List>
            <ListItem className="nav-items" button key="Home" component={Link} to={homePageString} index={homePageIndex}>
                <ListItemText primary="Home" />
              </ListItem>
            <ListItem className="nav-items" button key="Checkout" component={Link} to={checkoutPageString} index={checkoutPageIndex}>
              <ListItemText primary="Checkout"/>
            </ListItem>
            <ListItem className="nav-items" button key="Seller Dashboard" component={Link} to={dashboardPageString} index={dashboardPageIndex}>
              <ListItemText primary="Seller Dashboard"/>
            </ListItem>
            <ListItem className="nav-items" button key="About" component={Link} to={aboutPageString} index={aboutPageIndexTwo}>
              <ListItemText primary="About"/>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem className="nav-items" button key="Profile" component={Link} to={profilePageString} index={profilePageIndex}>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem className="nav-items" button key="Seller Details" component={Link} 
              to={sellerDetailsPageString} 
              index={sellerDetailsPageIndex}
              >
              <ListItemText primary="Seller Details" />
            </ListItem>
            <ListItem className="nav-items" button key="Logout" component={Link} to={homePageString} onClick={() => logoutCurrentUser()} >
              <ListItemText primary="Logout"/>
            </ListItem>
          </List>
        </div>
      )
      :
      (
        <div>
          <List>
            <ListItem className="nav-items" button key="Home" component={Link} to={homePageString} index={homePageIndex}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem className="nav-items" button key="Checkout" component={Link} to={checkoutPageString} index={checkoutPageIndex}>
              <ListItemText primary="Checkout" />
            </ListItem>
            <ListItem className="nav-items" button key="About" component={Link} to={aboutPageString} index={aboutPageIndexOne}>
              <ListItemText primary="About" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem className="nav-items" button key="Login" component={Link} to={loginPageString} index={loginPageIndex}>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem className="nav-items" button key="Register" component={Link} to={registerPageString} index={registerPageIndex}>
              <ListItemText primary="Register" />
            </ListItem>
          </List>
        </div>
      )
    }
    </div>
  );

    return(
      <div className="navigation-bar">
        <AppBar position="static">
          <Toolbar className="toolbar">
            <Tab className="no-hover" icon={<img class="logo_top_left" src={logo}/>} />
            <IconButton onClick={toggleDrawer('right', true)} edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={right} onClose={toggleDrawer('right', false)}>
              {sideList('right')}
            </Drawer>
          </Toolbar>
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
