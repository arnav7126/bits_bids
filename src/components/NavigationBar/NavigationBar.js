import React from "react";
import "./NavigationBar.css"; // Import the CSS file for styling
import menuicon1 from "../../assets/menuicon1.jpg";
import carticon from "../../assets/carticon.png";
import profileicon from "../../assets/profileicon.jpeg";
import notificationicon1 from "../../assets/notificationicon1.jpg";
import logo from "../../assets/logo.jpeg";
import buy from "../../assets/buy.png";
import logout1 from "../../assets/logout1.png";
import sell5 from "../../assets/sell5.png";
// import searchicon2 from "../../assets/searchicon2.png";
import { Button, Form, FormControl } from "react-bootstrap";
import { useState } from "react";
import ProfilePopup from "../ProfilePopup/ProfilePopup";

function NavigationBar({ userEmail }) {
  return (
    <div className="navbar">
      <div className="navbar-left">
        {/* <img src={menuicon1} alt="Menu" className="icon" /> */}
        <img src={logo} alt="Logo" className="Licon" />
      </div>
      <div className="navbar-right" style={{ width: "30%" }}>
        <Form className="search-bar">
          <FormControl
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
          {/* {
            <Button variant="outline-success">
              <img src={searchicon2} alt="Search" className="icon" />
            </Button>
          } */}
        </Form>

        <img src={notificationicon1} alt="Notifications" className="Nicon" />
        <img src={carticon} alt="Cart" className="Cicon" />
        {/* <img
          src={profileicon}
          alt="Profile"
          className="icon"
        /> */}
        <ProfilePopup userEmail={userEmail} />
      </div>
    </div>
  );
}

export default NavigationBar;
