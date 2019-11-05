import React from 'react';
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";
import {connect} from "react-redux";
import { Typography } from '@material-ui/core';

const Header = ({hidden, user}) => (
    <div className="icon-outer">
        <Typography> {user} </Typography>
        <CartIcon/>
        {hidden ? null : <CartDropdown /> }
    </div>
);

const mapStateToProps = state => ({
  hidden: state.cart.hidden,
  currentUser: state.user
});

export default connect(mapStateToProps)(Header);