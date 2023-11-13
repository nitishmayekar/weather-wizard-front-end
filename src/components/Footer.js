import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-section-1">
        <a className="logo">Logo</a>
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
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
  )
}
