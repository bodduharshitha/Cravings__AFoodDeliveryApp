const express = require("express");
const MenuItem = require("../models/MenuItem");
const Restaurant = require("../models/Restaurant");

const router = express.Router();

// Fetch menu items by restaurantId
router.get("/", async (req, res) => {
  try {
    const { restaurantId } = req.query;

    if (!restaurantId) {
      return res.status(400).json({ msg: "Restaurant ID is required" });
    }

    // Fetch restaurant details
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ msg: "Restaurant not found" });
    }

    // Fetch menu items
    const menuItems = await MenuItem.find({ restaurantId });

    res.status(200).json({
      restaurantName: restaurant.name,
      menu: menuItems,
    });
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
});

module.exports = router;
