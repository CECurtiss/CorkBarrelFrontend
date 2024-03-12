import React from "react";

import "./Home.css";
import storefront from "../../images/storefront.jpg";
import wineAisles from "../../images/WineAisles.jpg";
import spiritsDisplay from "../../images/spiritsdisplay.jpg";
// import reservewall from "../../images/reservewall.jpg";

const Home = () => {
  return (
    <>
      <img className="storefrontImg" src={storefront} alt="storefront" />

      <div className="col-12 wineDiv">
        <img className="col-6 wineAisles" src={wineAisles} alt="wine aisles" />
        <div className="col-6 wineText">
          <h1>Wine</h1>
          <p>
            Let the knowledgeable staff at Cork & Barrel Wine and Spirits help
            you navigate our selection of over 2,200 different wines. Visit us
            today and take advantage of our amazing service and competitive
            prices. Wether you're buying your go-to wine, or looking for
            something completely new, we've got a wine for you.
          </p>
        </div>
      </div>

      <div className="col-12 spiritsDiv">
        <div className="col-6 spiritsText">
          <h1>Spirits</h1>
          <p>
            At Cork & Barrel, our selection of spirits is vast and varied. We
            carry everything from the most popular brands to the most obscure.
            Our staff is always available to help you find the perfect spirit
            for your needs. We also carry a wide variety of mixers and garnishes
            to help you craft the perfect cocktail. Beyond our already low
            everyday prices, we offer case DISCOUNTS as well.
          </p>
        </div>
        <img className="col-6 spiritsImg" src={spiritsDisplay} alt='spirits display'></img>
      </div>
      <h1>Home Page</h1>
    </>
  );
};

export default Home;
