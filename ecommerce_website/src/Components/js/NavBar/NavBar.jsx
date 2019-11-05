import React from 'react';
import "../../css/NavBar.css";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import Header  from "../UserCart/Header";
import { Redirect } from 'react-router';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      isUserLoggedIn: props.isUserLoggedIn,
    }
    this.userIsLoggedInCallback = this.userIsLoggedInCallback.bind(this);
  }

  userIsLoggedInCallback(isLoggedIn) {
    this.props.userIsLoggedInCallback(isLoggedIn);
  }

  logUserOut() {
    window.localStorage.clear();
    this.setState({
      isUserLoggedIn: false
    },
      this.props.userIsLoggedInCallback(false)
    );
    this.props.history.push("/");
  }

  render() {
    return(
      <div className="navigation-bar">
        <AppBar position="static">
            {
              this.props.isUserLoggedIn ? 
              (
                <Tabs
                  className="nav-items"
                  variant="fullWidth"
                  value={this.state.value}
                  aria-label="nav tabs example"
                >
                  <Tab className="no-hover" label="LOGO" />
                  <Tab label="Home" component={Link} to="/"/>
                  <Tab label="Checkout" component={Link} to={"/checkout"} />
                  <Tab label="Profile" component={Link} to={"/profile"} />
                  <Tab label="Seller Dashboard" component={Link} to={"/dashboard"} />
                  <Tab label="Logout" onClick={e => this.logUserOut()} />
                  <Tab label="About" component={Link} to={"/about"} />
                </Tabs>
              )
              :
              (
                <Tabs
                  className="nav-items"
                  variant="fullWidth"
                  value={this.state.value}
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
    )
  }
}

export default NavBar;