import React, { Component } from 'react';
import './App.css';
import NavBar from "./Components/js/NavBar";
<<<<<<< HEAD
import { SearchBar } from "./Components/js/SearchBar";
import items from "./Components/data/items.json";
import { ItemList } from "./Components/js/ItemList";
import { PriceFilter } from "./Components/js/PriceFilter";
import { CategoryFilter } from "./Components/js/CategoryFilter";
=======
import HomePage from "./Components/js/HomePage/HomePage";
import AccountDashboard from "./Components/js/AccountDashboard/AccountDashboard";
>>>>>>> master

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

