import React from "react";
import { LocationSearch } from "./LocationSearch/LocationSearch";

export const Header = () => {
  return (
    <header className="header">
      <a href="https://google.com" alt="logo" className="logo">
        WeatherWizard
      </a>
      <LocationSearch />
    </header>
  );
};
