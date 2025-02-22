import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import "./Restaurants.css";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Simulating API call for restaurants
    setTimeout(() => {
      setRestaurants([
        {
          id: 1,
          name: "The Spice Hub",
          location: "Kadapa, AP",
          rating: 4.5,
          image: "restaurant1.jpg",
        },
        {
          id: 2,
          name: "Tandoori Flames",
          location: "Hyderabad, TS",
          rating: 4.7,
          image: "restaurant2.png",
        },
        {
          id: 3,
          name: "Sizzling Bites",
          location: "Bangalore, KA",
          rating: 4.3,
          image: "restaurant3.jpg",
        },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="restaurant-container">
      <h2>Featured Restaurants</h2>
      <motion.div
        className="restaurant-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {restaurants.map((restaurant) => (
          <motion.div
            key={restaurant.id}
            className="restaurant-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="restaurant-image"
            />
            <div className="restaurant-details">
              <h3 className="restaurant-name">{restaurant.name}</h3>
              <p className="restaurant-info">
                <FaMapMarkerAlt /> {restaurant.location}
              </p>
              <p className="restaurant-info">
                <FaStar color="gold" /> {restaurant.rating}
              </p>
              <button className="restaurant-button">
  <Link to={`/menu/${restaurant.id}`} className="menu-link">View Menu</Link>
</button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Restaurants;
