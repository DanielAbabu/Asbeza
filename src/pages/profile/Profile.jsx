import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";

export default function Profile({ src, name, num, mail }) {
  return (
    <div className="profile">
      <div className="edit-button">
        <Link to="/editprofile">
          <button>Edit</button>
        </Link>
      </div>
      <div className="profile-main">
        <img
          src="src\assets\profile2.png"
          alt="profile pic"
          className="profile-img"
        />
        <div className="profile-info">
          <div className="profile-info-item">
            <p className="pfpinfo">Name:</p>
            <p>Jennie Doe</p>
          </div>
          <div className="profile-info-item">
            <p className="pfpinfo">Phone Number:</p>
            <p>+25192030444050</p>
          </div>
          <div className="profile-info-item">
            <p className="pfpinfo">Email:</p>
            <p>jenniedoe@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
