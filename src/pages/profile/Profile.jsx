import React, { useState } from "react";
import "./profile.css";

export default function Profile() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name = "Name must contain only letters and spaces.";
    }
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }
    if (phone.length < 10) {
      newErrors.phone = "Phone number must be atleast 10 characters long.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", { name, phone, password, profilePic });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);
  };

  return (
    <div className="profile-container">
      <h3>Edit your profile</h3>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phonenum">Phone Number:</label>
          <input
            id="phonenum"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="pfp">Profile Picture:</label>
          <div className="image-upload-container">
            {profilePic ? (
              <img src={URL.createObjectURL(profilePic)} alt="Profile" />
            ) : (
              <div className="upload-icon">+</div>
            )}
            <input
              id="pfp"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
