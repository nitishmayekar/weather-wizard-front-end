import React from "react";
import "./style.css";
import image from "../../assets/contact-us.png";

// contact us form with name subject and message with submit button
export const Contact = () => {
  return (
    <div className="wrapper">
      <h1>Contact Us</h1>

      <img className="contact-us-image" src={image} alt="Weather Wizard" />

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
  );
};
