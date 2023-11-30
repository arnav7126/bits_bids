// OrdersPage.js
import React from "react";
import "./OrdersPane.css";
import LeftPane from "../../components/LeftPane/LeftPane";
import year1books from "../../assets/books1.jpg";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const OrdersPage = () => {
  return (
    <div>
      <NavigationBar />

      <div className="orders-container">
        <LeftPane />
        <div className="orders-right-pane">
          <h1 className="orders-header">My Cart</h1>
          <div className="order-item">
            <img src={year1books} className="order-image"></img>
            <div className="order-details">
              <div className="book-info">
                <div className="orders-heading">
                  Year 1 Sem 1 Books General Chemistry, Mechanics Oscillations &
                  Waves...
                </div>
              </div>
              <div className="purchase-info">
                <div className="sold-for">
                  Bought for 4000 Aarks Collected on 2nd August 2023
                </div>
              </div>
            </div>
            <div className="additional-image"></div>
          </div>
          {/* Add more order items as needed */}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
