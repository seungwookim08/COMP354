import React, { Component } from 'react';
import './App.css';
import items from "./Components/data/items.json";
import NavBar from "./Components/js/NavBar";
import HomePage from "./Components/js/HomePage/HomePage";

class App extends Component {
  constructor() {
    super();

    this.state = {
      allItems: items,
      searchField: "",
      priceFilter: 999, //intially set to a high value so it displays all options
      categoryFilter: "",
      ratingSort: ""
    };

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

