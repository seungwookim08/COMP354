import React from "react";
import "../css/SearchBar.css";
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="outer-container">
        <SearchIcon />
        <input type='search'
          placeholder='search items'
          className="searchbar"
          onChange={e => this.setState({ searchField: e.target.value })}
        />
      </div>
    );
  }
}

export default SearchBar;