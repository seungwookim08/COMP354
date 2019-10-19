import React, { Component } from 'react';
import './App.css';
import items from "./Components/data/items.json";

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
      <HomePage />
    );
  }
}
export default App;

