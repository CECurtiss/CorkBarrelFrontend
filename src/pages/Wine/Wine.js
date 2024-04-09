import React from "react";

import organicWine from "../../images/organicWine.jpg";
import reserveWall from "../../images/reservewall.jpg";
import "./Wine.css";

const Wine = () => {
  const handleClick = (e) => {
    e.preventDefault();
    alert("Thank you for signing up!");
  };

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

          <button type="submit" value="Submit" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
        <div className="vipClubSection">
          <div className="vipTextSection col-12">
            <h1>Join Our VIP Wine Club</h1>
            <ul>
              <li>10% OFF when you buy 6 containers of wine</li>
              <li>Exclusive club offers on featured wines</li>
              <li>
                Access your personal wine purchase history when you use your VIP
                account
              </li>
              <li>Notification of limited/allocated wine arrivals</li>
            </ul>
          </div>
        </div>

      <div className="reserveWallDiv">
        <p>High End Selections</p>
        <h1 className="reserveWallHeading">Reserve Wall</h1>
        <div className="reserveWallImgDiv">
          <h3 className="reserveWallText">
            Looking for high-end wines? We have an entire wall of them. Full of
            hard-to-find library releases and allocated bottles, come see what
            the reserve wall has to offer you.
          </h3>

          <img
            className="reserveWallImg"
            src={reserveWall}
            alt="Reserve Wall"
          />
        </div>
      </div>

      <div>
        <div className="organicWineSection">
          <h1>Organic, Biodynamic, & Natural Wine</h1>
          <div className="organicWineDiv">
            <img
              className="organicWineImg"
              src={organicWine}
              alt="Organic Wine Img"
            />
            <h3 className="organicWineText">
              We have a wide selection of organic, biodynamic, and natural wines
              for you to choose from. Whether you're looking for a sulfite-free
              wine, or a wine made with organic grapes, we have what you're
              looking for.
            </h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Wine;
