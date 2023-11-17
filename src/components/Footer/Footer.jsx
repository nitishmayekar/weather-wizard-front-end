import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import "./style.css";

export const Footer = () => {
  return (
    <footer>
      <div className="full-screen-wrapper">
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
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/">
            <BsFacebook />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">
            <BsInstagram />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.twitter.com/">
            <BsTwitter />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/">
            <BsYoutube />
          </a>
        </div>
        <p>&copy; All Rights Reserved</p>
      </div>
    </footer>
  );
};
