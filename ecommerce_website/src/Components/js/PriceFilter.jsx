import React from "react";
import "../css/SearchBar.css";
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "../css/Filters.css";

export const PriceFilter = ({ handleChange }) => (

  <div className="filter">
    <FormControl>
        <InputLabel htmlFor="age-native-simple">Price $</InputLabel>
        <Select
          native
          onChange={handleChange}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        >
          <option value={999}>Under 1000</option>
          <option value={299}>Under 300</option>
          <option value={199}>Under 200</option>
          <option value={99}>Under 100</option>
        </Select>
      </FormControl>
  </div>
)