import React, { useState } from "react";
import "./ManageRestaurants.css";

const ManageRestaurants = () => {
  const [restaurants, setRestaurants] = useState([
    { id: 1, name: "The Spice Hub", location: "Kadapa, AP" },
    { id: 2, name: "Tandoori Flames", location: "Hyderabad, TS" }
  ]);
  const [newRestaurant, setNewRestaurant] = useState({ name: "", location: "" });

  const handleChange = (e) => {
    setNewRestaurant({ ...newRestaurant, [e.target.name]: e.target.value });
  };

  const addRestaurant = () => {
    setRestaurants([...restaurants, { id: Date.now(), ...newRestaurant }]);
    setNewRestaurant({ name: "", location: "" });
  };

  const deleteRestaurant = (id) => {
    setRestaurants(restaurants.filter(r => r.id !== id));
  };

  return (
    <div className="manage-restaurants">
      <h2>Manage Restaurants</h2>
      <div className="restaurant-form">
        <input type="text" name="name" placeholder="Restaurant Name" value={newRestaurant.name} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={newRestaurant.location} onChange={handleChange} required />
        <button onClick={addRestaurant}>Add Restaurant</button>
      </div>
      <ul>
        {restaurants.map(r => (
          <li key={r.id}>
            {r.name} - {r.location}
            <button onClick={() => deleteRestaurant(r.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageRestaurants;
