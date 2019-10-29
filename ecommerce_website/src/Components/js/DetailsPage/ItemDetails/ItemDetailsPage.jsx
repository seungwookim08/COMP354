import React, { useState, useEffect } from 'react';
import ContainerDetailsPage from '../ContainerDetailsPage';
import axios from "axios";


const ItemDetailsPage = (props) => {
  const[item, setItem] = useState("");
  // const[itemImage, setItemImage] = useState("");
  // const[itemDescription, setItemDescription] = useState("");
  const[categoryName, setCategoryName] = useState("");
  // const[manufacturerFilter, setManufacturerFilter] = useState("");
  // const[ratingSort, setRatingSort] = useState("");

  useEffect(() => {
    // pass id number at the end of products/ with the use a stringbuilder
    axios
    .get('https://rocky-shore-99218.herokuapp.com/products/' + props.match.params.id)
    .then(({data}) => {
      setItem(data.contents[0]);
      setCategoryName(data.contents[0].categories[0].name);
    });
  });

  return (
    <div>
      <ContainerDetailsPage 
        name = {item.name}
        description = {item.description}
        id = {item.id}
        category = {categoryName}
        price = {item.price}
        sellerName = {item.sellerName}
      />
    </div>
  );
}

export default ItemDetailsPage;