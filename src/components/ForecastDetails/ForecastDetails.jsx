import React from "react";
import {
  BsWind,
  BsDropletHalf,
  BsThermometerHalf,
} from "react-icons/bs";
import "./style.css";

export const ForecastDetails = ({ details }) => {
  return (
    <div className="card">
      <div className="widget-wrapper">
        <div className="widget">
          <h1 className="title">
            <img
              src={`https://openweathermap.org/img/wn/${details.weather[0].icon}@2x.png`}
              alt={details.weather[0].description}
            />
          </h1>
          <p className="value">{details.weather[0].description}</p>
        </div>
        <div className="widget">
          <h1 className="title">
            <BsThermometerHalf />
          </h1>
          <div className="value">
            <p>{details.main.temp} &deg;C</p>
            <p>Feels like: {details.main.feels_link} &deg;C</p>
          </div>
        </div>

        <div className="widget">
          <h1 className="title">
            <BsWind />
          </h1>
          <p className="value">{details.wind.speed} m/s</p>
        </div>

        <div className="widget">
          <h1 className="title">
            <BsDropletHalf />
          </h1>
          <p className="value">{details.main.humidity}%</p>
        </div>
      </div>
    </div>
  );
};
