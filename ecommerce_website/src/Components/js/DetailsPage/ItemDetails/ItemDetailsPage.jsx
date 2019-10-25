import React, { useState, useEffect } from 'react';
import ContainerImage from '../ContainerImage';
import axios from "axios";

const ItemDetailsPage = () => {
  const[item, setItem] = useState([]);
  const[itemImage, setItemImage] = useState("");
  const[itemDescription, setItemDescription] = useState("");
  const[categoryFilter, setCategoryFilter] = useState("");
  const[manufacturerFilter, setManufacturerFilter] = useState("");
  const[ratingSort, setRatingSort] = useState("");

  useEffect(() => {
    // pass id number at the end of products/
    axios
    .get('https://rocky-shore-99218.herokuapp.com/products/')
    .then(({data}) => {
      setItem(data.contents);
    });
  });

  return (
    <div>
      <ContainerImage />
    </div>
  );
}

export default ItemDetailsPage;