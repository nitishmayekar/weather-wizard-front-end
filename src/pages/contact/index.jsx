import React from "react";
import "./style.css";
import image from "../../assets/contact-us.png";


export const Contact = () => {
  return (
    <div className="full-screen-wrapper">
      <div className="wrapper">
        <h1>Contact Us</h1>
        <div className="image-wrapper">
          <img className="about-us-image" src={image} alt="Weather Wizard" />
        </div>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" placeholder="Name" />
          </div>
          <div>
            <label htmlFor="subject">Subject:</label>
            <input id="subject" type="text" placeholder="Subject" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" placeholder="Message" />
          </div>
          <input name="Submit" type="submit" />
        </form>
      </div>
    </div>
  );
};
