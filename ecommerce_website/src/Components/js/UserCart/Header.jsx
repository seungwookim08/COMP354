import React from 'react';
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";
import {connect} from "react-redux";
import { Typography } from '@material-ui/core';
import {logoutCurrentUser} from '../../../Redux/user/user.actions';
import {Link} from 'react-router-dom';

const Header = ({hidden, currentUser, logoutCurrentUser}) => (
    <div>
    <div className="header" width="10%">
    <Typography> 
            {currentUser == null ? "" : "Welcome, " + currentUser}
          </Typography>
    </div>
    <div className="header">
      <Typography> 
            {currentUser == null ? <Link to="/login"> Sign In</Link> : <Link to="/login" onClick={() => logoutCurrentUser()}>Sign Out</Link>}
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
const mapDispatchToProps = dispatch => ({
  logoutCurrentUser:() => dispatch(logoutCurrentUser())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);