import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CrudApp = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Ali", email: "ali@example.com" },
    { id: 2, name: "Sara", email: "sara@example.com" },
  ]);

  const [newUser, setNewUser] = useState({ name: "", email: "" });

  const [editingUser, setEditingUser] = useState(null);

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const addUser = () => {
    if (newUser.name && newUser.email) {
      setUsers([...users, { id: Date.now(), ...newUser }]);
      setNewUser({ name: "", email: "" }); // Reset Input Fields
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (user) => {
    setEditingUser(user);
    setNewUser({ name: user.name, email: user.email });
  };

  // const updateUser = () => {
  //   setUsers(users.map((user) => (user.id === editingUser.id ? { ...editingUser, ...newUser } : user)));
  //   setEditingUser(null);
  //   setNewUser({ name: "", email: "" });
  // };

  const updateUser = () => {
    setUsers(
      users.map((user) =>
        user.id === editingUser.id ? { ...editingUser, ...newUser } : user
      )
    );
    setEditingUser(null);
    setNewUser({ name: "", email: "" });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">React CRUD App</h2>

      {/* 🔹 Input Fields for Add & Edit */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter Name"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          className="form-control mb-2"
          placeholder="Enter Email"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
        />
        {editingUser ? (
          <button className="btn btn-warning" onClick={updateUser}>
            Update User
          </button>
        ) : (
          <button className="btn btn-success" onClick={addUser}>
            Add User
          </button>
        )}
      </div>

      {/* 🔹 Display Users in Table */}
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => editUser(user)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudApp;
