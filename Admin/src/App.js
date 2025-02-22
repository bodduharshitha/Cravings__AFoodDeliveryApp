import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminNavbar from "./components/Navbar";
import AdminFooter from "./components/Footer";
import AdminDashboard from "./admin/AdminDashboard";
import ManageRestaurants from "./admin/ManageRestaurants";
import ManageProducts from "./admin/ManageProducts";
import ManageOrders from "./admin/ManageOrders";
import ManageUsers from "./admin/ManageUsers";
import Reports from "./admin/Reports";
import AdminLogin from "./admin/AdminLogin";
import AdminSignup from "./admin/AdminSignup";
import AdminLogout from "./admin/AdminLogout";
import { AdminAuthProvider } from "./context/AdminAuthContext"; 
import "./App.css"; 

const App = () => {
  return (
    <Router>  {/* ✅ Move Router outside */}
      <AdminAuthProvider>  {/* ✅ Now AdminAuthProvider is inside Router */}
        <AdminNavbar />
        <div className="main-content">
          <Routes>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/restaurants" element={<ManageRestaurants />} />
            <Route path="/admin/products" element={<ManageProducts />} />
            <Route path="/admin/orders" element={<ManageOrders />} />
            <Route path="/admin/users" element={<ManageUsers />} />
            <Route path="/admin/reports" element={<Reports />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/signup" element={<AdminSignup />} />
            <Route path="/admin/logout" element={<AdminLogout />} />
          </Routes>
        </div>
        <AdminFooter />
      </AdminAuthProvider>
    </Router>
  );
};

export default App;
