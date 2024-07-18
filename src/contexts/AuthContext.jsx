// src/contexts/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Retrieve the user data from localStorage if it exists
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  });

  // Function to log in the user
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Save user data to localStorage
  };

  // Function to log out the user
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Remove user data from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
