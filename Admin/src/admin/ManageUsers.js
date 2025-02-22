import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./ManageUsers.css";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulating API call to fetch users
    setTimeout(() => {
      setUsers([
        { id: 1, name: "John Doe", email: "john@example.com", role: "User" },
        { id: 2, name: "Alice Smith", email: "alice@example.com", role: "Admin" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
      ]);
    }, 1000);
  }, []);

  const handleEdit = (id) => {
    alert(`Edit user with ID: ${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
    <div className="manage-users">
      <h2>Manage Users</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(user.id)}>
                    <FaEdit />
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(user.id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Loading users...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
