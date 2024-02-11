import React from "react";
import productBg from "../../Images/table.jpg";
import "./banner.css";

const Banner = ({ title }) => {
  return (
    <div className="image-container">
      <img src={productBg} alt="Product Background" />
      <div className="overlay">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="text-white text-center">
              <h2 className="text-3xl lg:text-4xl font-bold">{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
