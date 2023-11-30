// Login.js
import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div classname="login-body">
      <div className="container">
        <div className="login-rectangle">
          <div className="circle"></div>
          <div className="login-description">
            Your go-to platform to buy, sell, and bid on high-quality used
            goods.
          </div>
          <div className="login-line"></div>
          <div className="loginText">Login using your account on </div>
          <div
            className="googleButton"
            onClick={() => console.log("Google button clicked")}
          >
            Google
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
