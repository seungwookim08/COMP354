import React from "react";
import "../css/SearchBar.css";
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "../css/Filters.css";
import StarBorderIcon from '@material-ui/icons/StarBorder';

export const SortRatingFilter = ({ handleChange }) => (

    <div className="filter">
        <FormControl>
            <InputLabel htmlFor="age-native-simple">Rating </InputLabel>
            <Select
                native
                onChange={handleChange}
            >
                <option value={""}></option>
                <option value={"lowhigh"}>Low to High</option>
                <option value={"highlow"}>High to Low</option>


            </Select>
        </FormControl>
    </div>
)