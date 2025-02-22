import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
     <Link to="/" className="logo">😋 Cravings</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/restaurants">Restaurants</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login" >Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
