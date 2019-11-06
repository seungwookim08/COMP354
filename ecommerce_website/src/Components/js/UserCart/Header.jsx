import React from 'react';
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";
import {connect} from "react-redux";
import { Typography } from '@material-ui/core';

const Header = ({hidden, currentUser}) => (
    <div className="header-outer">
    <div className="header">
    <Typography> 
            {currentUser == null ? "Not logged in." : "Welcome, you are logged in as: " + currentUser}
          </Typography>
    </div>
    
      <div className="icon-outer">
          <CartIcon/>
          {hidden ? null : <CartDropdown /> }
      </div>
      </div>
);

const mapStateToProps = state => ({
  hidden: state.cart.hidden,
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);