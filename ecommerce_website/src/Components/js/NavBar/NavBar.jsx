import React from 'react';
import "../../css/NavBar.css";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import Header  from "../UserCart/Header";

class NavBar extends React.Component {
  
  state = {
    value: null,
    isUserLoggedIn: null,
  }

  constructor(props) {
    console.log("constructor called in navbar, props: " + props);
    super(props);
    this.state = {
      value: props.value,
      isUserLoggedIn: props.isUserLoggedIn,
    }
    this.checkIfUserIsLoggedIn = this.checkIfUserIsLoggedIn.bind(this);
  }

  componentDidMount() {
    console.log("mount isUserLoggedIn in NavBar: " + this.state.isUserLoggedIn);
  }

  componentDidUpdate() {
    console.log(this.props);
    console.log("update isUserLoggedIn in NavBar: " + this.state.isUserLoggedIn);
    // this.checkIfUserIsLoggedIn();
  }

  checkIfUserIsLoggedIn() {
    console.log("checkIfUserIsLogged in called from navbar");
    this.props.checkIfUserIsLoggedIn();
  }

  logUserOut() {
    console.log("logout clicked");
    window.localStorage.clear();
    console.log("cleared userId data");
    console.log(localStorage.getItem("userId"));
    this.setState({
      isUserLoggedIn: false
    });
    this.props.checkIfUserIsLoggedIn();
  }

  render() {
    return(
      <div className="navigation-bar">
        <AppBar position="static">
            {
              this.state.isUserLoggedIn ? 
              (
                <Tabs
                  className="nav-items"
                  variant="fullWidth"
                  value={this.state.value}
                  // onChange={e => this.handleChange}
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
                  // onChange={e => this.handleChange}
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