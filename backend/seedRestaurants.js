const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Restaurant = require("./models/Restaurant");

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const seedRestaurants = async () => {
  try {
    await Restaurant.deleteMany();

    const restaurants = [
      { name: "The Spice Hub", location: "Kadapa, AP", rating: 4.5 },
      { name: "Tandoori Flames", location: "Hyderabad, TS", rating: 4.7 },
      { name: "Sizzling Bites", location: "Bangalore, KA", rating: 4.3 },
    ];

    const insertedRestaurants = await Restaurant.insertMany(restaurants);
    console.log("Restaurants added!");

    mongoose.connection.close();
    return insertedRestaurants;
  } catch (error) {
    console.error("Error seeding restaurants:", error);
    mongoose.connection.close();
  }
};

seedRestaurants();
