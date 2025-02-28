const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  restaurant: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: String, enum: ["Pending", "Delivered", "Cancelled"], default: "Pending" },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Order", orderSchema);
