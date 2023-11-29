// Login.js
import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="rectangle">
        <div className="circle"></div>
        <div className="description">
          Your go-to platform to buy, sell, and bid on high-quality used goods.
        </div>
        <div className="line"></div>
        <div className="loginText">Login using your account on </div>
        <div
          className="googleButton"
          onClick={() => console.log("Google button clicked")}
        >
          Google
        </div>
      </div>
    </div>
  );
};

export default Login;
