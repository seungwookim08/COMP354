import React, { useState, useEffect } from 'react';
import { SearchBar } from "./SearchBar";
import ItemList from "./ItemList";
import { PriceFilter } from "./PriceFilter";
import { CategoryFilter } from "./CategoryFilter";
import { SortRatingFilter } from "./SortRatingFilter";
import { ManufacturerFilter } from "./ManufacturerFilter";
import Header  from "./Header";
import axios from "axios";

const HomePage = () => {
  
  //using hooks because this state information is only pertinent to homepage
  const[allItems, setAllItems] = useState([]);
  const[searchField, setSearchField] = useState("");
  const[priceFilter, setPriceFilter] = useState(999); //intially set to a high value so it displays all options
  const[categoryFilter, setCategoryFilter] = useState("");
  const[manufacturerFilter, setManufacturerFilter] = useState("");
  const[ratingSort, setRatingSort] = useState("");
  
  //lets fetch the items using the api
  useEffect(() => {
    axios
    .get('https://rocky-shore-99218.herokuapp.com/products/')
    .then(({data}) => {
      setAllItems(data.contents);
    });
  });
  
  //instead of modifying the array of items, make new array and filter
  //allows us to take off properties from object, and set to const
  const filteredItems = allItems.filter(item =>
    (
      (item.name.toLowerCase().includes(searchField.toLowerCase())) &&
      (item.category.toLowerCase().includes(categoryFilter.toLowerCase())) &&
      (item.manufacturer.toLowerCase().includes(manufacturerFilter.toLowerCase())) &&
      (item.price <= priceFilter)
    )
  );

  if (ratingSort === "highlow") { //sorting from high to low

    //sorting array by rating in descending order
    filteredItems.sort(function (a, b) {
      return parseFloat(b.rating) - parseFloat(a.rating);
    });

  } else if (ratingSort === "lowhigh") { //sorting from low to high

    //sorting array by rating in ascending order
    filteredItems.sort(function (a, b) {
      return parseFloat(a.rating) - parseFloat(b.rating);
    });
  }

  return (
    <div className="App">
      <div>
        <Header/>
        <SearchBar
          handleChange={e => setSearchField(e.target.value)}
        />
        <PriceFilter
          handleChange={e => setPriceFilter(e.target.value)}
        />
        <CategoryFilter
          handleChange={e => setCategoryFilter(e.target.value)}
        />
        <ManufacturerFilter
          handleChange={e => setManufacturerFilter(e.target.value)}
        />
        <SortRatingFilter
          handleChange={e => setRatingSort(e.target.value)}
        />
      </div>
      <ItemList
        items={filteredItems}
      />
      
    </div>
  );
}


export default HomePage;