import React, { Component } from 'react';
import './App.css';
import NavBar from "./Components/js/NavBar";
import HomePage from "./Components/js/HomePage/HomePage";
import AccountDashboard from "./Components/js/AccountDashboard/AccountDashboard";

class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
        <NavBar />
        <HomePage />
      </div>
    );
  }
}



export default App;

