import React, { Component } from 'react';
import './App.css';
import NavBar from "./Components/js/NavBar";
import HomePage from "./Components/js/HomePage/HomePage";
import AccountDashboard from "./Components/js/AccountDashboard/AccountDashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();

  }
  

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;

