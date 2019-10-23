import React, { Component } from 'react';
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";
import {connect} from "react-redux";

const Header = ({currentUser, hidden}) => (
    <div className="icon-outer">
        <CartIcon/>
        {hidden ? null : <CartDropdown /> }
    </div>
);

const mapStateToProps = ({user: { currentUser }, cart: {hidden}}) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);