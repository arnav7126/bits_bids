import React from "react";
import "./ProductDescription.css"; // Make sure to create a CSS file with this name

const ProductDescription = ({ category, condition, description }) => {
  return (
    <div className="product-description">
      <div className="section">
        <div className="left-pane">Category:</div>
        <div className="right-pane">{category}</div>
      </div>
      <div className="section">
        <div className="left-pane">Condition:</div>
        <div className="right-pane">{condition}</div>
      </div>
      <div className="description-section">{description}Details: </div>
    </div>
  );
};

export default ProductDescription;
