import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin") {
      // Set the user data for the admin
      login({ email, role: "admin" });
      navigate("/addmeal");
    } else {
      // Set the user data for a regular user
      login({ email, role: "user" });
      navigate("/");
    }
  };

  return (
    <div className="login">
      <div className="con">
        <div className="limg"></div>
        <div className="info">
          <span className="logo">ASBEZA</span>
          <span className="wel">Get started now!!</span>
          <div className="formm">
            <form onSubmit={handleLogin}>
              <label htmlFor="email">Email Address</label>
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
              <input type="submit" value="Login" />
            </form>
          </div>
          <div className="lnkk">
            <span>You don't have an account? </span>
            <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
