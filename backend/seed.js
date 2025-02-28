const mongoose = require("mongoose");
const dotenv = require("dotenv");
const MenuItem = require("./models/MenuItem");
const Restaurant = require("./models/Restaurant");

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const seedDB = async () => {
  try {
    await MenuItem.deleteMany();

    const restaurants = await Restaurant.find(); // Fetch actual restaurant IDs

    if (restaurants.length < 3) {
      console.error("Not enough restaurants found! Add them first.");
      mongoose.connection.close();
      return;
    }

    const menuItems = [
      { name: "Chicken Biryani", restaurantId: restaurants[0]._id, price: 250, image: "biryani.jpg" },
      { name: "Paneer Butter Masala", restaurantId: restaurants[0]._id, price: 220, image: "paneer.jpg" },
      { name: "Butter Chicken", restaurantId: restaurants[1]._id, price: 280, image: "butterchicken.jpg" },
      { name: "Veg Burger", restaurantId: restaurants[2]._id, price: 120, image: "burgers.jpg" },
    ];

    await MenuItem.insertMany(menuItems);
    console.log("Menu items added!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
