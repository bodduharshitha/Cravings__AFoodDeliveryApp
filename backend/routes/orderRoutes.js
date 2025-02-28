const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

// Get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
});

// Create a new order
router.post("/", async (req, res) => {
  try {
    const { name, restaurant, price, status, image } = req.body;
    
    const newOrder = new Order({ name, restaurant, price, status, image });
    await newOrder.save();
    
    res.status(201).json({ msg: "Order placed successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
});

// Update order status
router.put("/:id", async (req, res) => {
  try {
    const { status } = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedOrder) return res.status(404).json({ msg: "Order not found" });

    res.status(200).json({ msg: "Order updated", order: updatedOrder });
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
});

// Delete an order
router.delete("/:id", async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);

    if (!deletedOrder) return res.status(404).json({ msg: "Order not found" });

    res.status(200).json({ msg: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
});

module.exports = router;
