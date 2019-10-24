import React, { useState, useEffect } from 'react';
import ContainerImage from '../ContainerImage';

const ItemDetailsPage = () => {
  const[itemImage, setItemImage] = useState("");
  const[itemDescription, setItemDescription] = useState("");
  const[categoryFilter, setCategoryFilter] = useState("");
  const[manufacturerFilter, setManufacturerFilter] = useState("");
  const[ratingSort, setRatingSort] = useState("");

  return (
    <Link to="/itemDetails">
      <div>
      <ContainerImage />
      </div>
    </Link>
  );
}

export default ItemDetailsPage;