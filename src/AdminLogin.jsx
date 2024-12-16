import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Example hardcoded validation
    if (credentials.username === "admin" && credentials.password === "password123") {
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Admin Login</h2>
        <form onSubmit={handleLogin} className="mt-4">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [profiles, setProfiles] = useState([
    { id: 1,profession:"Software Developer", name: "John Doe", email: "john.doe@example.com",city:"Ahmedabad",age:"28" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  ]);

  const [newProfile, setNewProfile] = useState({ name: "", email: "" });

  const addProfile = () => {
    if (newProfile.name && newProfile.email) {
      setProfiles((prevProfiles) => [
        ...prevProfiles,
        { id: Date.now(), name: newProfile.name, email: newProfile.email },
      ]);
      setNewProfile({ name: "", email: "" });
    } else {
      alert("Please fill out both name and email fields.");
    }
  };

  const deleteProfile = (id) => {
    setProfiles((prevProfiles) => prevProfiles.filter((profile) => profile.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-700">Admin Dashboard</h1>

      <div className="my-6">
        <h2 className="text-xl font-semibold text-gray-600">Add New Profile</h2>
        <div className="flex space-x-4 mt-4">
          <input
            type="text"
            placeholder="Name"
            value={newProfile.name}
            onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder="Email"
            value={newProfile.email}
            onChange={(e) => setNewProfile({ ...newProfile, email: e.target.value })}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={addProfile}
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Add Profile
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-600">Profiles</h2>
        <ul className="mt-4 space-y-4">
          {profiles.map((profile) => (
            <li
              key={profile.id}
              className="flex items-center justify-between p-4 bg-white rounded-md shadow-md"
            >
              <div>
                <p className="text-lg font-medium text-gray-700">{profile.name}</p>
                <p className="text-sm text-gray-500">{profile.email}</p>
              </div>
              <button
                onClick={() => deleteProfile(profile.id)}
                className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
