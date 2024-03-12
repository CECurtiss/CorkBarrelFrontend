import React from "react";

import "./Home.css";
import storefront from "../../images/storefront.jpg";
import wineAisles from "../../images/WineAisles.jpg";
// import reservewall from "../../images/reservewall.jpg";

const Home = () => {
  return (
    <>
      <img className="storefrontImg" src={storefront} alt="storefront" />
      <div className="col-12 wineDiv">
        <img
          className="col-6 wineAisles"
          src={wineAisles}
          alt="wine aisles"
        />
        <div className="wineText">
          <p>Here, I will write some things about wine.</p>
        </div>
      </div>
      <h1>Home Page</h1>
    </>
  );
};

export default Home;
