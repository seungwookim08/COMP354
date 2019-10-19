import React from "react";
import "../../css/SearchBar.css";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "../../css/Filters.css";

export const CategoryFilter = ({ handleChange }) => (

  <div className="filter">
      <FormControl>
        <InputLabel htmlFor="age-native-simple">Categories</InputLabel>
        <Select
          native
          onChange={handleChange}
        >
            <option value={""}></option>
          <option value={"electronics"}>Electronics</option>
          <option value={"fashion"}>Fashion</option>
          <option value={"consumable"}>Consumable</option>
        </Select>
      </FormControl>
  </div>
)