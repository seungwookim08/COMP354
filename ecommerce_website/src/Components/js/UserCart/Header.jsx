import React from 'react';
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";
import {connect} from "react-redux";

const Header = ({hidden}) => (
    <div className="icon-outer">
        <CartIcon/>
        {hidden ? null : <CartDropdown /> }
    </div>
);

const mapStateToProps = ({cart: {hidden}}) => ({
  hidden
});

export default connect(mapStateToProps)(Header);