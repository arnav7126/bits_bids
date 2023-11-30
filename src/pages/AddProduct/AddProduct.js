import React from "react";
import "./AddProduct.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar"; // Replace with the actual import path

const AddProduct = () => {
  return (
    <div>
      <div className="nav-bar">
        <NavigationBar />
      </div>

      {/* Centered rounded rectangle */}
      <div className="pdtcenteredRectangle">
        <div className="pdtroundedRectangle">
          <h1>Post Your Product</h1>

          {/* Horizontal rectangle with category dropdown */}
          <div className="categoryRectangle">
            <div id="categoryLabel">Category:</div>
            <select id="categoryDropdown">
              <option value="books">Books</option>
              <option value="sports">Sports</option>
              <option value="electronics">Electronics</option>
              <option value="mess-swap">Mess Swap</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="containing-4-div">
            {/* Big rectangle divided into 4 sections */}
            <div className="section" id="adTitleSection">
              <div className="label">Ad Title:</div>
              <input type="text" className="input" />
            </div>

            <div className="section" id="conditionSection">
              <div className="label">Condition:</div>
              <select className="input">
                <option value="new">New</option>
                <option value="used">Used</option>
                <option value="like-new">Like New</option>
              </select>
            </div>

            <div className="pdt-description-section" id="descriptionSection">
              <div className="label">Description:</div>
              <textarea className="input"></textarea>
            </div>

            <div className="section" id="priceSection">
              <div className="label">Set a price:</div>
              <input type="text" className="input" />
            </div>
          </div>
          <div className="uploadedPhotosSection">
            <div className="uploadPhotosLabel">Upload Photos:</div>

            {/* Individual photo boxes */}
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
              className="uploadedPhotoBox"
            ></img>
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
              className="uploadedPhotoBox"
            ></img>
            <div className="uploadedPhotoBox"></div>
            <div className="uploadedPhotoBox"></div>
            <div className="bottom-container">
              {/* Individual photo boxes for the bottom container */}
              <div className="bottomPhotoBox"></div>
              <div className="bottomPhotoBox"></div>
              <div className="bottomPhotoBox"></div>
              <div className="bottomPhotoBox"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
