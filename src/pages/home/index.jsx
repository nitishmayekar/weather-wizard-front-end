import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { LocationContext } from "../../context/LocationContext";
import { timeConverter } from "../../utils/time-converter";
import { ForecastDetails } from "../../components/ForecastDetails/ForecastDetails";
import { PlaceRecommendations } from "../../components/PleaceRecommendation";

export const Home = () => {
  const { selectedLocation, weatherData, threeHrForecast } =
    useContext(LocationContext);

  const [selected3hrForecast, setSelected3hrForecast] = useState(null);

  useEffect(() => {
    if (threeHrForecast && threeHrForecast.length > 0) {
      setSelected3hrForecast(threeHrForecast.list[0]);
    }
  }, [threeHrForecast]);

  if (!selectedLocation || !weatherData || !threeHrForecast) {
    return (
      <main>
        <h1 className="no-location-selected">
          Please select a location to view the weather.
        </h1>
      </main>
    );
  }

  return (
    <main className="full-screen-wrapper">
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

      {/*3 Hourly Forecast */}
      <div className="card">
        <h2 className="card-title">3-Hour Forecast</h2>
        <div className="hourly-forecast">
          {threeHrForecast.list.slice(0, 5).map((forecast) => {
            return (
              <>
                <div
                  key={forecast.dt}
                  className={`hour ${
                    selected3hrForecast?.dt === forecast.dt
                      ? "selected-hour"
                      : ""
                  }`}
                  onClick={() => setSelected3hrForecast(forecast)}
                >
                  <h4 className="time">{timeConverter(forecast.dt_txt)}</h4>
                  <img
                    src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                    alt={forecast.weather[0].description}
                  />
                  <p className="temperature">{forecast.main.temp} &deg;C</p>
                </div>
                {/* <div className="vertical-line"></div> */}
              </>
            );
          })}
        </div>
      </div>

      {/* Selected 3hr Forecast */}
      {selected3hrForecast && <ForecastDetails details={selected3hrForecast} />}

      {/* Recommended Places */}
      <PlaceRecommendations />
    </main>
  );
};
