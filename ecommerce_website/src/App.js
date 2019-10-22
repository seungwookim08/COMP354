import React, { Component } from 'react';
import './App.css';
import NavBar from "./Components/js/NavBar";
import HomePage from "./Components/js/HomePage/HomePage";
import AccountDashboard from "./Components/js/AccountDashboard/AccountDashboard";
import Cart from "./Components/js/UserCart/CartDropdown";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser : null
    }

  }
  

  render() {
    return (
      <div>
        <NavBar />
        <Cart />
        <HomePage />
      </div>
    );
  }
}
export default App;

