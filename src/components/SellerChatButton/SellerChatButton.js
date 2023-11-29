import React from "react";
import styles from "./SellerChatButton.module.css"; // Import the CSS module

const SellerChatButton = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Chat with seller</button>
    </div>
  );
};

export default SellerChatButton;
