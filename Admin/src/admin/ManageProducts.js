import React, { useState } from "react";
import "./ManageProducts.css";

const ManageProducts = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Paneer Butter Masala", price: 220 },
    { id: 2, name: "Chicken Biryani", price: 250 }
  ]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const addProduct = () => {
    setProducts([...products, { id: Date.now(), ...newProduct }]);
    setNewProduct({ name: "", price: "" });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="manage-products">
      <h2>Manage Products</h2>
      <div className="product-form">
        <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleChange} required />
        <button onClick={addProduct}>Add Product</button>
      </div>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} - ₹{p.price}
            <button onClick={() => deleteProduct(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageProducts;
