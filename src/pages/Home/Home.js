import React from "react";

import "./Home.css";
import storefront from "../../images/storefront.jpg";
import wineAisles from "../../images/WineAisles.jpg";
// import reservewall from "../../images/reservewall.jpg";

const Home = () => {
  return (
    <>
      <img className="storefrontImg" src={storefront} alt="storefront" />
      <div className="col-12 m-2 wineDiv">
        <img
          className="col-6 wineAisles"
          src={wineAisles}
          alt="wine aisles"
        />
        <div className="col-6 wineText">
          <h1 className="align-top">Wine</h1>
          <p>Let the knowledgeable staff at Cork & Barrel Wine and Spirits help you navigate our selection of over 2,200 different wines. Visit us today and take advantage of our amazing service and competitive prices. Wether you're buying your go-to wine, or looking for something completely new, we've got a wine for you.</p>
        </div>
      </div>
      <h1>Home Page</h1>
    </>
  );
};

export default Home;
