import React from "react";
import { LocationSearch } from "./LocationSearch/LocationSearch";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className="header">
      <Logo />
      <LocationSearch />
    </header>
  );
};
