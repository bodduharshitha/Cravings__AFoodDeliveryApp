import React from "react";
import { Link } from "react-router-dom"; 

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img src="/hero-food.jpg" alt="Delicious Food" className="hero-img" />
      <h1>Satisfy Your Cravings, Instantly! 🍕</h1>
      <Link to="/restaurants" className="btn">Order Now</Link>
    </div>
  );
};

export default Hero;
