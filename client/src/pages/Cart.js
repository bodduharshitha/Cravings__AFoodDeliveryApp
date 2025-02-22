import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Chicken Biryani",
      price: 250,
      quantity: 1,
      image: "biryani.jpg",
    },
    {
      id: 2,
      name: "Paneer Butter Masala",
      price: 180,
      quantity: 2,
      image: "paneer.jpg",
    },
    {
      id: 3,
      name: "Burger & Fries",
      price: 150,
      quantity: 1,
      image: "burger.jpg",
    },
  ]);

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <motion.div
        className="cart-items"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {cartItems.map((item) => (
          <motion.div
            key={item.id}
            className="cart-item"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="item-details">
              <img src={item.image} alt={item.name} className="item-image" />
              <div>
                <h3 className="item-name">{item.name}</h3>
                <p className="item-info">Price: ₹{item.price}</p>
              </div>
            </div>
            <div className="quantity-controls">
              <button className="quantity-btn" onClick={() => decreaseQuantity(item.id)}>
                <FaMinus />
              </button>
              <span>{item.quantity}</span>
              <button className="quantity-btn" onClick={() => increaseQuantity(item.id)}>
                <FaPlus />
              </button>
            </div>
            <button className="remove-btn" onClick={() => removeItem(item.id)}>
              <FaTrash />
            </button>
          </motion.div>
        ))}
      </motion.div>
      <div className="total-container">Total: ₹{totalPrice}</div>
      <motion.button
        className="checkout-btn"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        Proceed to Checkout
      </motion.button>
    </div>
  );
};

export default Cart;
