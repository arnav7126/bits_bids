import React from "react";
import styles from "./SellerChatButton.module.css"; // Import the CSS module
import { useNavigate } from "react-router-dom";

const SellerChatButton = () => {
  const navigate = useNavigate();

  const redirectToChatPage = () => {
    // Redirect to the "settings" route
    navigate("/chatpage");
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={redirectToChatPage}>
        Chat with seller
      </button>
    </div>
  );
};

export default SellerChatButton;
