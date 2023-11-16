import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-section-1">
        <Logo />
        <div className="footer-links">
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <div className="subscribe-section">
          <label htmlFor="subscribe-email">Subscribe to our newsletter</label>
          <input id="subscribe-email" type="text" placeholder="Email" />
        </div>
      </div>
      <div className="social-links">
        <BsFacebook />
        <BsInstagram />
        <BsTwitter />
        <BsYoutube />
      </div>
      <p>&copy; All Rights Reserved</p>
    </footer>
  );
};
