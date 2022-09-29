import React from "react";
import "./home.style.scss";

import HomeHeading from "../../components/home-heading/home-heading.component";
import AboutButton from "../../components/about-button/about-button.component";

const Home = () => {
  return (
    <header className="header">
      <div className="text-box">
        <HomeHeading />
        <AboutButton />
      </div>
    </header>
  );
};

export default Home;
