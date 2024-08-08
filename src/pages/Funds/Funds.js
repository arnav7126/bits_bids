import React, { useState } from "react";
import LeftPane from "../../components/LeftPane/LeftPane";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import "./Funds.css";

function Funds() {
  const [availableFunds, setAvailableFunds] = useState(0);
  const [fundsToAdd, setFundsToAdd] = useState(0);

  const handleAddFunds = () => {
    const amountToAdd = Number(fundsToAdd);
    if (!isNaN(amountToAdd) && amountToAdd > 0) {
      setAvailableFunds(availableFunds + amountToAdd);
      setFundsToAdd(0); // Optionally reset the input field
      console.log(`Adding funds: ${amountToAdd}`);
      // Implement the logic to handle adding funds, like an API call
    }
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
