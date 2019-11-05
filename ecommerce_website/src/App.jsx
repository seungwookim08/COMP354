import './App.css';
import React, { Component } from 'react';
import NavBar from "./Components/js/NavBar/NavBar";
import { Route, Switch} from "react-router-dom";
import Login from "./Components/js/Login/Login";
import HomePage from "./Components/js/HomePage/HomePage";
import AccountDashboard from "./Components/js/AccountDashboard/AccountDashboard";
import ItemDetailsPage from "./Components/js/DetailsPage/ItemDetails/ItemDetailsPage";
import RegisterPage from "./Components/js/RegisterPage/RegisterPage";
import CheckoutPage from "./Components/js/UserCart/CheckoutPage";
import ProfilePage from "./Components/js/ProfilePage/ProfilePage";
import UserDetails from "./Components/js/RegisterPage/RegisterPage";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: window.localStorage.getItem("userId") ? true : false,
      history: props.history,
    }
    this.userIsLoggedInCallback = this.userIsLoggedInCallback.bind(this);
  }

  userIsLoggedInCallback(isLoggedIn) {
    this.setState({
      isUserLoggedIn: isLoggedIn
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar 
          isUserLoggedIn={this.state.isUserLoggedIn}
          userIsLoggedInCallback={this.userIsLoggedInCallback}
          history={this.state.history}
          />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/COMP354" component={HomePage} />
          <Route path="/cart" />
          <Route path="/profile" component={ProfilePage}/>
          <Route path='/dashboard' component={AccountDashboard} />
          <Route path="/about"/>
          <Route path="/product/:id" component={ItemDetailsPage}/>
          <Route path='/RegisterPage' component={RegisterPage}/>
          <Route path='/Login' 
            component={()=> 
              <Login userIsLoggedInCallback={this.userIsLoggedInCallback}/>
            }
          />
          <Route path='/checkout' component={CheckoutPage}/>
          <Route path='/login' component={UserDetails}/>
        </Switch>
      </React.Fragment>
    );
  }
}



export default App;

