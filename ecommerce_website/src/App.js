import React, { Component } from 'react';
import './App.css';
import NavBar from "./Components/js/NavBar";
import { Route, Switch} from "react-router-dom";
import HomePage from "./Components/js/HomePage/HomePage";
import AccountDashboard from "./Components/js/AccountDashboard/AccountDashboard";
import ItemDetailsPage from "./Components/js/DetailsPage/ItemDetails/ItemDetailsPage";

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
          <Route path="/profile"/>
          <Route path='/dashboard' component={AccountDashboard} />
          <Route path="/about"/>
          <Route path="/item-details-page" component={ItemDetailsPage}/>
        </Switch>
      </React.Fragment>
    );
  }
}



export default App;

