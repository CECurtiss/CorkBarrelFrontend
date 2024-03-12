import React from "react";
import storefront from "../images/storefront.jpg";
import reservewall from "../images/reservewall.jpg";

const Home = () => {
  const backgroundImageStyle = {
    width: "100%",
    height: "auto",
    margin: "0",
  };
  return (
    <>
      <img style={backgroundImageStyle} src={storefront} alt="storefront" />
      <div>
        <img style={backgroundImageStyle} src={reservewall} alt="reservewall" />
      </div>
      <h1>Home Page</h1>
    </>
  );
};

export default Home;
