import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
export default function Signup() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignup = (e) => {
    e.preventDefault();
    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // You can add more validation logic as needed

    // Mock sign-up process
    const userData = { name, phone, email, role: "user" };
    login(userData); // Log the user in
    navigate("/"); // Redirect to the homepage
  };

  return (
    <div className="signup">
      <div className="con">
        <div className="info">
          <span className="logo">ASBEZA</span>
          <span className="wel">Get started now!!</span>
          <div className="formm">
            <form onSubmit={handleSignup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <input type="submit" value="Sign up" />
            </form>
          </div>
          <div className="lnkk">
            <span>Already have an account? </span>
            <Link to="/login">Login</Link>
          </div>
        </div>
        <div className="limg"></div>
      </div>
    </div>
  );
}
