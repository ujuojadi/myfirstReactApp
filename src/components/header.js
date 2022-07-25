import React from "react";
import { Link } from "react-router-dom";
import image43 from "../images/logo.webp";
import image44 from "../images/WhatsApp Image 2022-07-22 at 1.24.01 PM.jpeg";

export default function Header() {
  return (
    <header>
      <div className="logo-section">
        <img src={image43} alt="" class="logo" />
        <h3>Interactive Website</h3>
      </div>
      <div className="navigation">
        <nav id="nav">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/application">Application form</Link>
          <Link to="/studentdata">StudentData</Link>
        </nav>
      </div>
      <div>
        <button id="dark-mode">
          <img src={image44} alt="" />
        </button>
      </div>
    </header>
  );
}
