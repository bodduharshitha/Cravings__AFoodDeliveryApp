import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import "./Home.css";

const Home = () => {
  return (
    <motion.div 
      className="home" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.2 }}
    >
      <Hero />
      <h2>Order from the best restaurants near you 🍔</h2>
    </motion.div>
  );
};

export default Home;
