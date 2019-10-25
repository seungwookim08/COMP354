import React, { Component } from 'react';
import './App.css';
import NavBar from "./Components/js//NavBar";
import { Route, Switch} from "react-router-dom";
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
<<<<<<< HEAD
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Router>
=======
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/dashboard' component={AccountDashboard} />
        </Switch>
>>>>>>> master
      </React.Fragment>
    );
  }
}



export default App;

