import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar"; // Replace with the actual import path
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel"; // Replace with the actual import path
import ProductDetails from "../../components/ProductDetails/ProductDetails"; // Replace with the actual import path
import ProductDescription from "../../components/ProductDescription/ProductDescription"; // Replace with the actual import path
import SellerChatButton from "../../components/SellerChatButton/SellerChatButton"; // Replace with the actual import path
import "./ProductPage.css"; // This will contain the styling for the page

const ProductPage = ({
  product = {
    images: [],
    details: {},
    category: "",
    condition: "",
    description: "",
    seller: {},
  },
}) => {
  // Assuming product is an object containing all the required props for child components
  return (
    <div className="product-page">
      <div className="nav-bar">
        <NavigationBar />
      </div>
      <div className="main-content">
        <div className="left-pane">
          <ImageCarousel images={product.images} />
        </div>
        <div className="product-page-right-pane">
          <ProductDetails details={product.details} />
        </div>
      </div>
      <div className="bottom-content">
        <div className="left-pane">
          <ProductDescription
            category={product.category}
            condition={product.condition}
            description={product.description}
          />
        </div>
        <div className="product-page-right-pane">
          <SellerChatButton seller={product.seller} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
