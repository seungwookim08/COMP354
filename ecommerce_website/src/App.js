import './App.css';
import React, { Component } from 'react';
import NavBar from "./Components/js/NavBar/NavBar";
import { Route, Switch, Redirect} from "react-router-dom";
import Login from "./Components/js/Login/Login";
import HomePage from "./Components/js/HomePage/HomePage";
import AccountDashboard from "./Components/js/AccountDashboard/AccountDashboard";
import ItemDetailsPage from "./Components/js/DetailsPage/ItemDetails/ItemDetailsPage";
import RegisterPage from "./Components/js/RegisterPage/RegisterPage";
import CheckoutPage from "./Components/js/UserCart/CheckoutPage";
import UserDetails from "./Components/js/RegisterPage/RegisterPage";

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cart" />
          <Route path="/profile"/>
          <Route path='/dashboard' component={AccountDashboard} />
          <Route path="/about"/>
          <Route path="/product/:id" component={ItemDetailsPage}/>
          <Route path='/RegisterPage' component={RegisterPage}/>
          <Route path='/Login' component={Login}/>
          <Route path='/checkout' component={CheckoutPage}/>
          <Route path='/login' component={UserDetails} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

