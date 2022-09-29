import React from "react";
import { Link } from "react-router-dom";
import "./logo.style.scss";

const Logo = () => {
  return (
    <div className="logo-box">
      <Link to="/">
        <img src={require("../../img/logo-white.png")} alt="Logo" className="logo" />
      </Link>
    </div>
  );
};

export default Logo;
