import React from "react";

import reserveWall from "../../images/reservewall.jpg";
import "./Wine.css";

const Wine = () => {
  return (
    <div>
      <div className="wineHomeImg">
        <h1>Wine</h1>
      </div>
      <div className="col-12 VIPContainer">
        <h2 className="col-6 winePageIntroText">
          Let the knowledgeable staff at Cork & Barrel Wine and Spirits help you
          navigate our selection of over 2,200 different wines. Visit us today
          and take advantage of our amazing service and competitive prices.
          Wether you're buying your go-to wine, or looking for something
          completely new, we've got a wine for you.
        </h2>
        <form className="col-6 VIPFormStyle">
          <h2>Get Wine Updates!</h2>
          <h4>News From Cork & Barrel to your Inbox</h4>
          <label> Name:</label>
          <input type="text" name="name" />

          <label> Email:</label>
          <input type="text" name="email" />

          <label> Phone:</label>
          <input type="text" name="phone" />

          <label>Email Lists</label>
          <label className="checkboxLabel" htmlFor="GeneralInterest">
            <input
              type="checkbox"
              id="GeneralInterest"
              name="General Interest"
            />
            General Interest
          </label>

          <label className="checkboxLabel" htmlFor="VIPWineClub">
            <input type="checkbox" id="VIPWineClub" name="VIP Wine Club" />
            VIP Wine Club
          </label>

          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
      <div className="reserveWallDiv">
        <p>High End Selections</p>
        <h1 className="reserveWallHeading">Reserve <br />Wall</h1>
        <div className="reserveWallImgDiv">
          <img
            className="reserveWallImg"
            src={reserveWall}
            alt="Reserve Wall"
          />
        </div>
      </div>
      <div>
        <p>some text</p>
      </div>
    </div>
  );
};

export default Wine;
