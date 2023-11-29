import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ProfilePopup from "./components/ProfilePopup/ProfilePopup";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import SellerChatButton from "./components/SellerChatButton/SellerChatButton";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import ck1 from "/Users/arnav/Desktop/bitsbids/bitsbids/src/assets/ck1.jpg";
import ck2 from "/Users/arnav/Desktop/bitsbids/bitsbids/src/assets/ck2.jpg";
import ck3 from "/Users/arnav/Desktop/bitsbids/bitsbids/src/assets/ck3.jpeg";
import ck4 from "/Users/arnav/Desktop/bitsbids/bitsbids/src/assets/ck4.jpg";
import ck5 from "/Users/arnav/Desktop/bitsbids/bitsbids/src/assets/ck5.jpg";
import Settings from "./pages/Settings/Settings";

function App() {
  const userEmail = "f20220063@hyderabad.bits-pilani.ac.in";
  const images = [
    { ck1 },
    { ck2 },
    { ck3 },
    { ck4 },
    { ck5 },
    // ... up to 8 images
  ];

  return (
    <div>
      {/* <NavigationBar userEmail={userEmail} /> */}
      {/* <HomePage />
      <ProductDetails />
      <SellerChatButton />
      <ImageCarousel />
      <ProductDescription /> */}
      {/* <ProfilePopup userEmail={userEmail} /> */}
      {/* Other components */}
      {/* <ProductPage /> */}
      <Settings />
    </div>
  );
}

export default App;

/*import "./App.css";

import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
    </div>
  );
}

export default App;*/
