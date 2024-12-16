import React, { useState } from "react";

const Dashboard = () => {
  // Initial state for profiles
  const [profiles, setProfiles] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  ]);

  const [newProfile, setNewProfile] = useState({ name: "", email: "" });

  // Handle adding a new profile
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

  // Handle deleting a profile
  const deleteProfile = (id) => {
    setProfiles((prevProfiles) => prevProfiles.filter((profile) => profile.id !== id));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Admin Dashboard</h1>

      {/* Add Profile Section */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Add New Profile</h2>
        <input
          type="text"
          placeholder="Name"
          value={newProfile.name}
          onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
          style={{ marginRight: "10px" }}
        />
        <input
          type="email"
          placeholder="Email"
          value={newProfile.email}
          onChange={(e) => setNewProfile({ ...newProfile, email: e.target.value })}
          style={{ marginRight: "10px" }}
        />
        <button onClick={addProfile} style={{ padding: "5px 10px" }}>
          Add Profile
        </button>
      </div>

      {/* Profiles List */}
      <h2>Profiles</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {profiles.map((profile) => (
          <li
            key={profile.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            <div>
              <strong>{profile.name}</strong>
              <br />
              <span>{profile.email}</span>
            </div>
            <button
              onClick={() => deleteProfile(profile.id)}
              style={{ padding: "5px 10px", background: "red", color: "white", border: "none", borderRadius: "3px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

