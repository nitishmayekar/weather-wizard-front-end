import React from "react";
import { LocationSearch } from "../LocationSearch/LocationSearch";
import { Logo } from "../Logo";
import "./style.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="full-screen-wrapper">
        <div className="header-content">
          <Logo />
          <LocationSearch />
        </div>
      </div>
    </header>
  );
};
