// OrdersPage.js
import React, { useState } from "react";
// import "./OrdersPane.css";
import LeftPane from "../../components/LeftPane/LeftPane";
import year1books from "../../assets/books1.jpg";
import "./Funds.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

function Funds({ availableFunds }) {
  const [fundsToAdd, setFundsToAdd] = useState("");

  const handleAddFunds = () => {
    // Implement the logic to handle adding funds
    console.log(`Adding funds: ${fundsToAdd}`);
    // Here you would typically make an API call to update the funds in the database
  };

  return (
    <div>
      <NavigationBar />
      <div className="funds-container">
        <LeftPane />
        <div className="funds-right-pane">
          <h1 className="funds-header">Funds</h1>
          <div className="funds-details">
            <div className="available-funds">
              Available Funds: ₹{availableFunds}
            </div>
            <div className="funds-input-section">
              <input
                type="number"
                className="funds-input"
                value={fundsToAdd}
                onChange={(e) => setFundsToAdd(e.target.value)}
                placeholder="Enter amount"
              />
              <button className="add-funds-button" onClick={handleAddFunds}>
                Add Funds
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Funds;
