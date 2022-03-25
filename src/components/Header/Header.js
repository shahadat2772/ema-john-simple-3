import React from "react";
import "./Header.css";
import logo from "./../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="headerContainer">
      <img src={logo} alt="" />
      <div className="navItems">
        <a href="">Shop</a>
        <a href="">Order</a>
        <a href="">Inventory</a>
        <a href="">About</a>
      </div>
    </nav>
  );
};

export default Header;
