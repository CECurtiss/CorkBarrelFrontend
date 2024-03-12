import React from "react";

import "./Home.css";
import storefront from "../../images/storefront.jpg";
import reservewall from "../../images/reservewall.jpg";

const Home = () => {

  return (
    <>
      <img className="storefrontImg" src={storefront} alt="storefront" />
      <div>
        <img className="reservewallImg" src={reservewall} alt="reservewall" />
      </div>
      <h1>Home Page</h1>
    </>
  );
};

export default Home;
