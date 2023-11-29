// OrdersPage.js
import React from "react";
import "./OrdersPane.css";
import LeftPane from "../LeftPane/LeftPane";
import year1books from "./assets/books1.jpg";

const OrdersPage = () => {
  return (
    <div className="orders-container">
      <LeftPane />
      <div className="orders-right-pane">
        <h1 className="orders-header">Orders</h1>
        <div className="order-item">
          <img src={year1books} className="order-image"></img>
          <div className="order-details">
            <div className="book-info">
              <h3>
                Year 1 Sem 1 Books General Chemistry, Mechanics Oscillations &
                Waves...
              </h3>
            </div>
            <div className="purchase-info">
              <p>Bought for 4000 Aarks Collected on 2nd August 2023</p>
            </div>
          </div>
          <div className="additional-image"></div>
        </div>
        {/* Add more order items as needed */}
      </div>
    </div>
  );
};

export default OrdersPage;
