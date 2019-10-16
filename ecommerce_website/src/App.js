import React, { Component } from 'react';
import './App.css';
import NavBar from "./Components/js/NavBar.js";
import SearchBar from "./Components/js/SearchBar";
import items from "./Components/data/items.json";
import { ItemList } from "./Components/js/ItemList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: items,
      searchField: ""
    };
  }


  render() {
    return (
      <div className="App">
        <NavBar />
        <SearchBar />
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;
