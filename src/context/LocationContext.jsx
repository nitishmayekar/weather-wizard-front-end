import React, { useState, createContext, useMemo, useEffect } from "react";
import { api } from "../utils/api";

export const LocationContext = createContext(null);

export const LocationProvider = (props) => {
  const [selectedLocation, setSelectedLocation] = useState({
    name: "Toronto",
    lat: 43.6534817,
    lon: -79.3839347,
    country: "CA",
    state: "Ontario",
  });
  const [weatherData, setWeatherData] = useState(null);
  const [threeHrForecast, setThreeHrForecast] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const res = await api.get(
        `/weather/${selectedLocation.lat}/${selectedLocation.lon}`
      );
      setWeatherData(res.data);
    };

    const fetch3hrForecast = async () => {
      const res = await api.get(
        `/3h/${selectedLocation.lat}/${selectedLocation.lon}`
      );
      setThreeHrForecast(res.data);
    };

    if (selectedLocation) {
      fetchWeatherData();
      fetch3hrForecast();
    }
  }, [selectedLocation]);

  const contextValue = useMemo(
    () => ({
      selectedLocation,
      setSelectedLocation,
      weatherData,
      threeHrForecast,
    }),
    [selectedLocation, setSelectedLocation, weatherData, threeHrForecast]
  );

  return (
    <LocationContext.Provider value={contextValue}>
      {props.children}
    </LocationContext.Provider>
  );
};
