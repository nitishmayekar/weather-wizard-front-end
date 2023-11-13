import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <a href="https://google.com" alt="logo" className="logo">
        WeatherWizard
      </a>
      <input id="search-bar" type="text" placeholder="Search" />
    </header>
  );
};
