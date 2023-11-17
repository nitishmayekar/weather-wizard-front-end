import React from "react";
import logo from "../../assets/logo.png";
import "./style.css";

export const About = () => {
  return (
    <div className="full-screen-wrapper">
      <div className="wrapper">
        <h1>About Us</h1>
        <div className="image-wrapper">
          <img className="about-us-image" src={logo} alt="Weather Wizard" />
        </div>
        <div className="description">
          <p>
            Weather Wizard is a weather app that helps you find the weather in
            your area.
          </p>
          <p>
            This app was created as part of the final project for the{" "}
            <a href="https://www.altcademy.com/">AltCademy</a> Full Stack Web
            Development course.
          </p>
          <p>
            The app was built using React, Node.js, Express, and the OpenWeather
            API.
          </p>

          <p>The app was built by Nitish.</p>
        </div>
      </div>
    </div>
  );
};
