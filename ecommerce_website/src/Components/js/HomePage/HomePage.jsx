import React, { useState } from 'react';
import { SearchBar } from "./SearchBar";
import ItemList from "./ItemList";
import { PriceFilter } from "./PriceFilter";
import { CategoryFilter } from "./CategoryFilter";
import { SortRatingFilter } from "./SortRatingFilter";
import items from "../../data/items.json";


const HomePage = () => {

  //using hooks because this state information is only pertinent to homepage
  const[allItems, setAllItems] = useState(items);
  const[searchField, setSearchField] = useState("");
  const[priceFilter, setPriceFilter] = useState(999); //intially set to a high value so it displays all options
  const[categoryFilter, setCategoryFilter] = useState("");
  const[ratingSort, setRatingSort] = useState("");
  
  //instead of modifying the array of items, make new array and filter
  //allows us to take off properties from object, and set to const
  const filteredItems = allItems.filter(item =>
    (
      (item.name.toLowerCase().includes(searchField.toLowerCase())) &&
      (item.category.toLowerCase().includes(categoryFilter.toLowerCase())) &&
      (item.price <= priceFilter)
    )
  );

  if (ratingSort == "highlow") { //sorting from high to low

    //sorting array by rating in descending order
    filteredItems.sort(function (a, b) {
      return parseFloat(b.rating) - parseFloat(a.rating);
    });

  } else if (ratingSort == "lowhigh") { //sorting from low to high

    //sorting array by rating in ascending order
    filteredItems.sort(function (a, b) {
      return parseFloat(a.rating) - parseFloat(b.rating);
    });
  }

  return (
    <div className="App">
      <div>
        <SearchBar
          handleChange={e => setSearchField(e.target.value)}
        />
        <PriceFilter
          handleChange={e => setPriceFilter(e.target.value)}
        />
        <CategoryFilter
          handleChange={e => setCategoryFilter(e.target.value)}
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