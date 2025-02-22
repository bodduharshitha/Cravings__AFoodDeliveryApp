import React from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Welcome, Admin!</h2>
      <div className="dashboard-links">
        <Link to="/admin/restaurants" className="dashboard-card">Manage Restaurants</Link>
        <Link to="/admin/products" className="dashboard-card">Manage Products</Link>
        <Link to="/admin/orders" className="dashboard-card">Manage Orders</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
