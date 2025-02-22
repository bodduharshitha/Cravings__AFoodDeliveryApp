import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import "./ViewMenu.css";

const ViewMenu = () => {
  const { restaurantId } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");

  useEffect(() => {
    // Simulated API call for menu items
    setTimeout(() => {
        const restaurantMenus = {
            1: {
              name: "The Spice Hub",
              menu: [
                { id: 1, name: "Paneer Butter Masala", price: 220, image: process.env.PUBLIC_URL + "/images/paneer.jpg" },
                { id: 2, name: "Chicken Biryani", price: 250, image: process.env.PUBLIC_URL + "/images/biryani.jpg" },
                { id: 3, name: "Tandoori Roti", price: 40, image: process.env.PUBLIC_URL + "/images/roti.jpeg" },
              ],
            },
            2: {
              name: "Tandoori Flames",
              menu: [
                { id: 4, name: "Butter Chicken", price: 280, image: process.env.PUBLIC_URL + "/images/butterchicken.jpg" },
                { id: 5, name: "Naan", price: 50, image: process.env.PUBLIC_URL + "/images/naan.jpg" },
                { id: 6, name: "Dal Makhani", price: 180, image: process.env.PUBLIC_URL + "/images/daal.jpeg" },
              ],
            },
            3: {
              name: "Sizzling Bites",
              menu: [
                { id: 7, name: "Veg Burger", price: 120, image: process.env.PUBLIC_URL + "/images/burgers.jpg" },
                { id: 8, name: "French Fries", price: 80, image: process.env.PUBLIC_URL + "/images/fries.jpg" },
                { id: 9, name: "Cold Coffee", price: 100, image: process.env.PUBLIC_URL + "/images/coffee.png" },
              ],
            },
          };
          

      const restaurantData = restaurantMenus[restaurantId] || { name: "Unknown", menu: [] };
      setRestaurantName(restaurantData.name);
      setMenuItems(restaurantData.menu);
    }, 1000);
  }, [restaurantId]);

  return (
    <motion.div 
      className="menu-container"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{restaurantName} - Menu</h2>
      <Link to="/restaurants" className="back-button">← Back to Restaurants</Link>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <motion.div 
            key={item.id} 
            className="menu-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={item.image} alt={item.name} className="menu-image" />
            <div className="menu-details">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <button className="order-button">Add to Cart</button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ViewMenu;
