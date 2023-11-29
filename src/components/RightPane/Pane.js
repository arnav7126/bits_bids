import React from "react";
import "./RightPane.css"; // You may need to create a CSS file for styling

const Pane = () => {
  return (
    <div className="right-pane">
      <div className="profile-header">
        <h2>Profile</h2>
      </div>
      <div className="profile-details">
        <div className="profilePicture1"></div>
        <h1 className="name">John Doe</h1>
        <p className="email">john.doe@example.com</p>
      </div>
      <div className="info-box">
        <div className="info-section">
          <p>Phone number:</p>
        </div>
        <div className="infoboxline"></div>
        <div className="info-section">
          <p>Address:</p>
        </div>
        <div className="infoboxline"></div>
        <div className="info-section">
          <p>Branch:</p>
        </div>
      </div>
    </div>
  );
};

export default Pane;
