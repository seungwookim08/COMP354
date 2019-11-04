import React from 'react';
import "../../css/NavBar.css";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import Header  from "../UserCart/Header";

export default function NavBar() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    console.log(event);
    console.log(newValue);
    setValue(newValue);
  };

  const userIsLoggedIn = function() {
    if(localStorage.getItem("userId") !== null) {
      console.log("if: userid = ", localStorage.getItem("userId"));
      return true;
    }
    console.log("else");
    return false;
  }

  return (
    <div className="navigation-bar">
        <AppBar position="static">
            {
              userIsLoggedIn() ? 
              (
                <Tabs
                  className="nav-items"
                  variant="fullWidth"
                  value={value}
                  onChange={handleChange}
                  aria-label="nav tabs example"
                >
                  <Tab className="no-hover" label="LOGO" />
                  <Tab label="Home" component={Link} to="/"/>
                  <Tab label="Checkout" component={Link} to={"/checkout"} />
                  <Tab label="Profile" component={Link} to={"/profile"} />
                  <Tab label="Seller Dashboard" component={Link} to={"/dashboard"} />
                  <Tab label="About" component={Link} to={"/about"} />
                </Tabs>
              )
              :
              (
                <Tabs
                  className="nav-items"
                  variant="fullWidth"
                  value={value}
                  onChange={handleChange}
                  aria-label="nav tabs example"
                >
                  <Tab className="no-hover" label="LOGO" />
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
  );
}