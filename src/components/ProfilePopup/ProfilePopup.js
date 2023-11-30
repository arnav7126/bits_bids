// ProfilePopup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import "./ProfilePopup.css";
import profileicon from "../../assets/profileicon.jpeg";
import buy from "../../assets/buy.png";
import logout1 from "../../assets/logout1.png";
import sell5 from "../../assets/sell5.png";

function ProfilePopup({ userEmail }) {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const redirectToSettings = () => {
    // Redirect to the "settings" route
    navigate("/settings");
  };

  const redirectToHomePage = () => {
    // Redirect to the "settings" route
    navigate("/");
  };

  const redirectToAddProduct = () => {
    // Redirect to the "settings" route
    navigate("/addproduct");
  };

  const redirectToLogin = () => {
    // Redirect to the "settings" route
    navigate("/login");
  };

  return (
    <>
      <img
        src={profileicon}
        alt="Profile"
        className="profile-icon"
        onClick={() => setIsVisible(!isVisible)}
      />

      {isVisible && (
        <div className="popup">
          {/* <p className="email">{userEmail}</p> */}
          <img src={profileicon} alt="Profile Pic" className="profile-pic" />
          <button className="profile-button" onClick={redirectToSettings}>
            Profile
          </button>
          <div className="options">
            <button className="option" onClick={redirectToHomePage}>
              <img src={buy} alt="Buy" className="option-icon" />
              <span>Buy</span>
            </button>
            <button className="option" onClick={redirectToAddProduct}>
              <img src={sell5} alt="Sell" className="option-icon" />
              <span>Sell</span>
            </button>
            <div className="option" onClick={redirectToLogin}>
              <img src={logout1} alt="Logout" className="option-icon" />
              <span>Logout</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfilePopup;
