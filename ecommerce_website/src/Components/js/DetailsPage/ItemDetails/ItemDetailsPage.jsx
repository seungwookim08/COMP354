import React, { useState, useEffect } from 'react';
import ContainerDetailsPage from '../ContainerDetailsPage';
import axios from "axios";

const ItemDetailsPage = (props) => {
  const[item, setItem] = useState("");
  const[categoryName, setCategoryName] = useState("");

  // Retrieve specific product for the details page with the id
  useEffect(() => {
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
      // Retrieve and set values for the details page 
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