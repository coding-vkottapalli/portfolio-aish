import React from "react";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./navigation.style.scss";
import Logo from "../../components/logo/logo.component";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <Logo></Logo>

      <Outlet></Outlet>
    </div>
  );
};

export default Navigation;
