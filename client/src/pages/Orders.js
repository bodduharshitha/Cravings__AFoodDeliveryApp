import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulating API call for orders
    setTimeout(() => {
      setOrders([
        {
          id: 1,
          name: "Chicken Biryani",
          restaurant: "The Spice Hub",
          price: 250,
          status: "Delivered",
          image: "biryani.jpg",
        },
        {
          id: 2,
          name: "Paneer Butter Masala",
          restaurant: "Tandoori Flames",
          price: 180,
          status: "Pending",
          image: "paneer.jpg",
        },
        {
          id: 3,
          name: "Burger & Fries",
          restaurant: "Sizzling Bites",
          price: 150,
          status: "Cancelled",
          image: "burger.jpg",
        },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>
      <motion.div
        className="orders-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {orders.map((order) => (
          <motion.div
            key={order.id}
            className="order-card"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img src={order.image} alt={order.name} className="order-image" />
            <div className="order-details">
              <h3 className="order-name">{order.name}</h3>
              <p className="order-info">From: {order.restaurant}</p>
              <p className="order-info">Price: ₹{order.price}</p>
            </div>
            <div
              className={`order-status ${
                order.status === "Pending"
                  ? "status-pending"
                  : order.status === "Delivered"
                  ? "status-delivered"
                  : "status-cancelled"
              }`}
            >
              {order.status === "Delivered" && <FaCheckCircle />}{" "}
              {order.status === "Pending" && <FaClock />}{" "}
              {order.status === "Cancelled" && <FaTimesCircle />}{" "}
              {order.status}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Orders;
