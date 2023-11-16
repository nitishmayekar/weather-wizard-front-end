import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./style.css";

export const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} height={100} alt="logo" className="logo" />
    </Link>
  );
};
