import React, { useState, useEffect } from 'react';
import "../../css/HomePage.css"

import { SearchBar } from "./SearchBar";
import ItemList from "./ItemList";
import axios from "axios";
import FilterByDropdown from "./FilterByDropdown";
import SortOrderDropdown from "./SortOrderDropdown";

import logo from '../../../ImageAssets/logo.png';

export default class HomePage extends Component {

  constructor(props) {
    super(props);

    this.getProductsUrl = this.getProductsUrl.bind(this);
    this.handleFilterColumnChanged = this.handleFilterColumnChanged.bind(this);
    this.handleSearchChanged = this.handleSearchChanged.bind(this);
    this.handleSortOrderChanged = this.handleSortOrderChanged.bind(this);
    this.handlePageChanged = this.handlePageChanged.bind(this);
    this.loadItems = this.loadItems.bind(this);

    this.state = {
      page: 1,
      max: 8,
      sort: "",
      search: "",
      asc: true,
      pages: 1,
      items: []
    };
  }

  componentDidMount() {
    this.loadItems();
  }

  loadItems() {
    axios.get(this.getProductsUrl())
        .then((res) => {
          let response = res.data;
          if(response.is_success) {
            this.setState({
              items: response.contents,
              pages: response.pages
            });
          }
        })
        .catch((e) => {
          console.log(e);
        });
  }

  getProductsUrl() {
    let url = `https://rocky-shore-99218.herokuapp.com/products?page=${this.state.page}&max=${this.state.max}&sort=${this.state.sort}&search=${this.state.search}&asc=${this.state.asc}`;
    return url;
  }
  
  handleSearchChanged(searchValue) {
    this.setState({
      search: searchValue,
      page: 1
    }, this.loadItems);
  }

  handleFilterColumnChanged(filterColumn) {
    this.setState({
      sort: filterColumn
    }, this.loadItems);
  }

  handleSortOrderChanged(sortOrder) {
    this.setState({
      asc: sortOrder
    }, this.loadItems);
  }

  handlePageChanged(page) {
    this.setState({
      page: page
    }, this.loadItems);
  }

  render() {
    return (
        <div className="App">
          <div>
            <img class="central_logo" src={logo}/>
            <SearchBar handleChange={e => this.handleSearchChanged(e.target.value)}/>
            <FilterByDropdown onFilterColumnChange={c => this.handleFilterColumnChanged(c)}/>
            <SortOrderDropdown onSortOrderChanged={o => this.handleSortOrderChanged(o)}/>
          </div>
          <ItemList items={this.state.items} page={this.state.page}
                    pages={this.state.pages} max={this.state.max}
                    onPageClicked={this.handlePageChanged}/>
        </div>
    );
  }

}