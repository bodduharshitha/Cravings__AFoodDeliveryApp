import React, { useEffect, useState } from "react";
import { FaChartLine, FaShoppingCart, FaUser } from "react-icons/fa";
import "./Reports.css";

const Reports = () => {
  const [reportData, setReportData] = useState({
    totalSales: 0,
    totalOrders: 0,
    totalUsers: 0,
  });

  useEffect(() => {
    // Simulating API call for reports data
    setTimeout(() => {
      setReportData({
        totalSales: 125000, // In INR
        totalOrders: 340,
        totalUsers: 1200,
      });
    }, 1000);
  }, []);

  return (
    <div className="reports">
      <h2>Admin Reports</h2>
      <div className="report-cards">
        <div className="report-card">
          <FaChartLine className="report-icon sales-icon" />
          <div className="report-info">
            <h3>₹{reportData.totalSales.toLocaleString()}</h3>
            <p>Total Sales</p>
          </div>
        </div>
        <div className="report-card">
          <FaShoppingCart className="report-icon orders-icon" />
          <div className="report-info">
            <h3>{reportData.totalOrders}</h3>
            <p>Total Orders</p>
          </div>
        </div>
        <div className="report-card">
          <FaUser className="report-icon users-icon" />
          <div className="report-info">
            <h3>{reportData.totalUsers}</h3>
            <p>Total Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
