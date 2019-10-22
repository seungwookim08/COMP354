import React, { Component } from 'react';
import CartIcon from "../UserCart/CartIcon";
import Cart from "../UserCart/CartDropdown";
import {connect} from "react-redux";

const Header = ({currentUser, hidden}) => (
    <div>
        <CartIcon/>
        {hidden ? null : <Cart /> }
    </div>
);

const mapStateToProps = ({user: { currentUser }, cart: {hidden}}) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);