import React from "react";
import "../css/NavBar.css"

class NavBar extends React.Component {

  render() {
    return (
      <div className="navigation-bar">
        <ul>
          <li className="no-hover"><a>LOGO</a></li>
          <li><a href="#">Home</a></li>
          <li id="cart-icon"><a href="#">Cart</a></li>
          <li id="profile-icon"><a href="#">Profile</a></li>
          <li id="about-page"><a href="#">About</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;