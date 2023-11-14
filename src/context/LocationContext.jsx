import React, { useState, createContext, useMemo, useEffect } from "react";
import { api } from "../utils/api";

export const LocationContext = createContext();

export const LocationProvider = (props) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);


  useEffect(() => {
    const fetchWeatherData = async () => {
      const res = await api.get(
        `/weather/${selectedLocation.lat}/${selectedLocation.lon}`
      );
      setWeatherData(res.data);
    };

    if (selectedLocation) {
      fetchWeatherData();
    }
  }, [selectedLocation]);

  const contextValue = useMemo(
    () => ({
      selectedLocation,
      setSelectedLocation,
      weatherData,
    }),
    [selectedLocation, setSelectedLocation, weatherData]
  );

  return (
    <LocationContext.Provider value={contextValue}>
      {props.children}
    </LocationContext.Provider>
  );
};
