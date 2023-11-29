import React, { useState } from "react";
import "./ProfilePopup.css"; // Import the CSS file for styling
import profileicon from "../../assets/profileicon.jpeg";
import buy from "../../assets/buy.png";
import logout1 from "../../assets/logout1.png";
import sell5 from "../../assets/sell5.png";

function ProfilePopup({ userEmail }) {
  const [isVisible, setIsVisible] = useState(false);

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
          <button className="profile-button">Profile</button>
          <div className="options">
            <div className="option">
              <img src={buy} alt="Buy" className="option-icon" />
              <span>Buy</span>
            </div>
            <div className="option">
              <img src={sell5} alt="Sell" className="option-icon" />
              <span>Sell</span>
            </div>
            <div className="option">
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
