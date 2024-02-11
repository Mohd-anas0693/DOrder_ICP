import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import icp from "../../../assets/image 32.png";
const Footer = () => {
  return (
    <footer className="footer  text-white pt-10 pb-5">
      <div className="max-w-6xl mx-auto px-5 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-6">
              <img src={icp} alt="icp" />{" "}
            </div>
            <p>
              Welcome to DOrder, where fashion, technology, and home essentials
              meet innovation. Discover a curated selection of exclusive deals
              and eco-friendly products designed to enrich your lifestyle.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="mb-4 font-semibold text-xl">About Us</h2>
            <ul>
              <li className="mb-2">Careers</li>
              <li className="mb-2">Our Stores</li>
              <li className="mb-2">Our Cares</li>
              <li className="mb-2">Terms & Conditions</li>
              <li className="mb-2">Privacy Policy</li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="mb-4 font-semibold text-xl">Customer Care</h2>
            <ul>
              <li className="mb-2">Help Center</li>
              <li className="mb-2">How to Buy</li>
              <li className="mb-2">Track Your Order</li>
              <li className="mb-2">Corporate & Bulk Purchasing</li>
              <li className="mb-2">Returns & Refunds</li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="mb-4 font-semibold text-xl">Contact Us</h2>
            <ul>
              <li className="mb-2">
                Address: Gurmaill park,tibba road, ludhiana
              </li>
              <li className="mb-2">Email: mohdanas0.693@gmail.com</li>
              <li className="mb-2">Phone: +91 8437827790</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
