import React, { useContext} from "react";
import "./style.css";
import { LocationContext } from "../../context/LocationContext";

export const Home = () => {
    const { selectedLocation, weatherData } =
    useContext(LocationContext);

  if (!selectedLocation || !weatherData) {
    return (
      <main>
        <h1 className="no-location-selected">
          Please select a location to view the weather.
        </h1>
      </main>
    );
  }

    return (
        <main>
{/* Current Forecast */}
<div className="card hero-section">
        <div className="current-city">
          <h2 className="name">
            {selectedLocation.name}, {selectedLocation.state},{" "}
            {selectedLocation.country}
          </h2>
          <h3 className="date">
            {new Date(
              (weatherData.dt + weatherData.timezone) * 1000
            ).toDateString()}
          </h3>
        </div>
        <div className="current-forecast">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
          <h3 className="weather">{weatherData.weather[0].description}</h3>
          <p className="temperature">{weatherData.main.temp} &deg;C</p>
        </div>
      </div>
        </main>

    )
}