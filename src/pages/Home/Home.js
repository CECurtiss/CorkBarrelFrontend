import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import storefront from "../../images/storefront.jpg";
import wineAisles from "../../images/WineAisles.jpg";
import spiritsDisplay from "../../images/spiritsdisplay.jpg";
import beerDoors from "../../images/beercoolerdoors.jpg";
// import reservewall from "../../images/reservewall.jpg";

const Home = () => {
  const [showWineText, setShowWineText] = useState(false);
  const [showSpiritsText, setShowSpiritsText] = useState(false);
  const [showBeerText, setShowBeerText] = useState(false);

  return (
    <>
      <img className="storefrontImg" src={storefront} alt="storefront" />

      <div className="col-12 categoryDiv">
        <img className="col-6 wineAisles" src={wineAisles} alt="wine aisles" />
        <div
          className="col-6 wineText"
          onMouseEnter={() => setShowWineText(true)}
          onMouseLeave={() => setShowWineText(false)}
        >
          <h1>
            <Link to="/Wine">Wine</Link>
          </h1>
          <p style={{ opacity: showWineText ? 1 : 0 }}>
            Let the knowledgeable staff at Cork & Barrel Wine and Spirits help
            you navigate our selection of over 2,200 different wines. Visit us
            today and take advantage of our amazing service and competitive
            prices. Whether you're buying your go-to wine, or looking for
            something completely new, we've got a wine for you.
          </p>
        </div>
      </div>

      <div className="col-12 categoryDiv">
        <div className="col-6 spiritsText"
        onMouseEnter={() => setShowSpiritsText(true)}
        onMouseLeave={() => setShowSpiritsText(false)}>
          <h1>
            <Link to="/Spirits">Spirits</Link>
          </h1>
          <p style={{ opacity: showSpiritsText ? 1 : 0 }}>
            At Cork & Barrel, our selection of spirits is vast and varied. We
            carry everything from the most popular brands to the most obscure.
            Our staff is always available to help you find the perfect spirit
            for your needs. We also carry a wide variety of mixers and garnishes
            to help you craft the perfect cocktail. Beyond our already low
            everyday prices, we offer case DISCOUNTS as well.
          </p>
        </div>
        <img
          className="col-6 spiritsImg"
          src={spiritsDisplay}
          alt="spirits display"
        ></img>
      </div>

      <div className="col-12 categoryDiv">
        <img
          className="col-6 coolerdoors"
          src={beerDoors}
          alt="Beer Cooler Doors"
        />
        <div className="col-6 beerText"
        onMouseEnter={() => setShowBeerText(true)}
        onMouseLeave={() => setShowBeerText(false)}>
          <h1>
            <Link to="/Beer">Beer</Link>
          </h1>
          <p style={{ opacity: showBeerText ? 1 : 0 }}>
            Cork & Barrel has an extensive selection of craft, domestic, and
            imported beers. We carry a wide variety of styles and sizes. Whether
            you're looking for a six-pack of your favorite beer, or a case of
            something new, we've got you covered. Our staff is always available
            to help you find the perfect beer for your needs.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
