import React, { useState, createContext, useMemo, useEffect } from "react";
import { api } from "../utils/api";

export const LocationContext = createContext();

export const LocationProvider = (props) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [threeHrForecast, set3hrForecast] = useState(null);

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
      console.log(res.data);
      set3hrForecast(res.data);
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
