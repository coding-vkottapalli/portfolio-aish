import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./about-button.style.scss";

const AboutButton = () => {
  return (
    <div>
      <Link to="/about" className="btn btn-white btn-animated">
        Learn More
      </Link>
    </div>
  );
};

export default AboutButton;
