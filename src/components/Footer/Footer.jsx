import React from "react";
import NavBar from "react-bootstrap/Navbar"
import "./Footer.css";

export default function Footer() {
  return (
    <NavBar>
    <div id="footer-container">
      <img src="https://i.imgur.com/UicUhqA.png" alt="logo" id="footer-logo" />
      <div id="footer-text-container">
        <p>Privacy Policy</p>
        <p>Careers</p>
      </div>
      <p>Copyright {new Date().getFullYear()} </p>
    </div>
    </NavBar>
  );
}
