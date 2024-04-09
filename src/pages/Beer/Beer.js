import React from "react";

import beerCave from "../../images/caveentrance.jpg";
import "./Beer.css";
const Beer = () => {
  return (
    <div>
      <div className="beerHomeImg">
        <h1>Beer</h1>
      </div>

      <div className="col-12 beerIntroContainer">
        <h2 className="col-6 beerPageIntroText">
          Let the knowledgeable staff at Cork & Barrel Wine and Spirits help you
          navigate our selection of over 2,200 different beers. Visit us today
          and take advantage of our amazing service and competitive prices.
          Wether you're buying your go-to beer, or looking for something
          completely new, we've got a beer for you.
        </h2>
        <img
            className="col-6 beerCaveImg"
            src={beerCave}
            alt="Beer Cave"
        ></img>
    </div>
    
    </div>
  );
};

export default Beer;
