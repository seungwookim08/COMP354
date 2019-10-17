import React, { Component } from 'react';
import './App.css';
import NavBar from "./Components/js/NavBar.js";
import { SearchBar } from "./Components/js/SearchBar";
import items from "./Components/data/items.json";
import { ItemList } from "./Components/js/ItemList";
import { PriceFilter } from "./Components/js/PriceFilter";
import { CategoryFilter } from "./Components/js/CategoryFilter";

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: items,
      searchField: "",
      priceFilter: 999, //intially set to a high value so it displays all options
      categoryFilter: ""
    };
  }


  render() {

    //instead of modifying the array of items, make new array and filter
    //allows us to take off properties from object, and set to const
    const { items, searchField, priceFilter, categoryFilter } = this.state;
    const filteredItems = items.filter(item =>
      (
        (item.name.toLowerCase().includes(searchField.toLowerCase())) &&
        (item.category.toLowerCase().includes(categoryFilter.toLowerCase())) &&
        (item.price <= priceFilter)
      )

    );
    return (
      <div className="App">
        <NavBar />
        <div>
          <SearchBar
            handleChange={e => this.setState({ searchField: e.target.value })}
          />
          <PriceFilter
            handleChange={e => this.setState({ priceFilter: e.target.value })}
          />
          <CategoryFilter
            handleChange={e => this.setState({ categoryFilter: e.target.value })}
          />
        </div>
        <ItemList
          items={filteredItems}
        />
      </div>
    );
  }
}

export default App;
