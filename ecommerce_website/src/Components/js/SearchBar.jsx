import React from "react";
import "../css/SearchBar.css";
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

export const SearchBar = ({ handleChange }) => (
  <div className="outer-container">
    <TextField
      type="search"
      id="searchBar"
      label="Search items"
      onChange={handleChange}
      InputProps={{
        startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
      }}
    />

  </div>
)

