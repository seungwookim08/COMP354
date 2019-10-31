import React, { Component } from 'react';
import './App.css';
import NavBar from "./Components/js/NavBar";
import { Route, Switch} from "react-router-dom";
import HomePage from "./Components/js/HomePage/HomePage";
import AccountDashboard from "./Components/js/AccountDashboard/AccountDashboard";
import ItemDetailsPage from "./Components/js/DetailsPage/ItemDetails/ItemDetailsPage";
import CheckoutPage from "./Components/js/UserCart/CheckoutPage";
import ProfilePage from "./Components/js/ProfilePage/ProfilePage";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cart" />
          <Route path="/profile" component={ProfilePage}/>
          <Route path='/dashboard' component={AccountDashboard} />
          <Route path="/about"/>
          <Route path="/product/:id" component={ItemDetailsPage}/>
          <Route path='/checkout' component={CheckoutPage}/>
        </Switch>
      </React.Fragment>
    );
  }
}



export default App;

