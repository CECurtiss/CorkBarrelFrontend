import React from "react";
import "./Spirits.css";

import scotchaisle from "../../images/scotchaisle.jpg";
import bourbonaisle from "../../images/bourbonaisle.jpg";

const Spirits = () => {
  return (
    <div>
      <div className="spiritsHomeImg">
        <h1>Spirits</h1>
      </div>

      <div className="col-12 spiritsContainer">
        <h2 className="col-6 spiritsPageIntroText">
          At Cork & Barrel, our selection of spirits is vast and varied. We
          carry everything from the most popular brands to the most obscure. Our
          staff is always available to help you find the perfect spirit for your
          needs. We also carry a wide variety of mixers and garnishes to help
          you craft the perfect cocktail. Beyond our already low everyday
          prices, we offer case DISCOUNTS as well.
        </h2>
        <img
          className="col-6 scotchAisleImg"
          src={scotchaisle}
          alt="scotch aisle"
        ></img>
      </div>

      <div className="highEndSpirits">
        <p>High End Selections</p>
        <h1 className="reserveSpiritsHeading">Top Shelf Spirits</h1>
        <div className="reserveSpiritsImgDiv">
          <h3 className="reserveSpiritsText">
            Hard to find tequila, bourbon, scotch, and more! These brands are
            high quality and limited in production. Come find those rare spirits
            for yourself, or as a gift for that special someone who is hard to
            shop for.
          </h3>

          <img
            className="reserveSpiritsImg"
            src={bourbonaisle}
            alt="Reserve Spirits"
          />
        </div>
      </div>
    </div>
  );
};

export default Spirits;
