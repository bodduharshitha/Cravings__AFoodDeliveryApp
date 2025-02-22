import React from "react";
import { Link } from "react-router-dom";
import { useAdminAuth } from "../context/AdminAuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { isAdminAuthenticated } = useAdminAuth(); // ✅ Extract authentication state

  return (
    <nav className="navbar">
      <Link to="/admin" className="logo">😋 Cravings Admin</Link>
      <div className="nav-links">
        <Link to="/admin/restaurants">Manage Restaurants</Link>
        <Link to="/admin/products">Manage Products</Link>
        <Link to="/admin/orders">Manage Orders</Link>
        <Link to="/admin/users">Manage Users</Link>
        <Link to="/admin/reports">Reports</Link>
        {!isAdminAuthenticated ? (
          <>
            <Link to="/admin/login">Login</Link>
            <Link to="/admin/signup">Sign Up</Link>
          </>
        ) : (
          <Link to="/admin/logout">Logout</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
