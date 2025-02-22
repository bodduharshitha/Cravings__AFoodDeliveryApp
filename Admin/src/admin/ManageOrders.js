import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaTruck } from "react-icons/fa";
import "./ManageOrders.css";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulating API call for orders data
    setTimeout(() => {
      setOrders([
        { id: 1, customer: "Rahul Sharma", item: "Chicken Biryani", price: 250, status: "Pending" },
        { id: 2, customer: "Priya Reddy", item: "Paneer Butter Masala", price: 220, status: "Delivered" },
        { id: 3, customer: "Amit Kumar", item: "Veg Burger", price: 120, status: "In Transit" },
      ]);
    }, 1000);
  }, []);

  const updateStatus = (id, status) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  return (
    <div className="manage-orders">
      <h2>Manage Orders</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Item</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.item}</td>
              <td>₹{order.price}</td>
              <td>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
              <td>
                <button onClick={() => updateStatus(order.id, "In Transit")} className="transit-btn">
                  <FaTruck /> Transit
                </button>
                <button onClick={() => updateStatus(order.id, "Delivered")} className="delivered-btn">
                  <FaCheckCircle /> Delivered
                </button>
                <button onClick={() => updateStatus(order.id, "Cancelled")} className="cancel-btn">
                  <FaTimesCircle /> Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;
