import React from 'react';
import storefront from "../images/storefront.jpg";
import reservewall from "../images/reservewall.jpg";
import backgroundslash from "../images/backgroundslash.png";

const Home = () => {
    const backgroundImageStyle = {
        width: "100%",
        height: "auto",
        margin: "0",
    }
    return (
        <>
        <img style={backgroundImageStyle} src={storefront} alt="storefront" />
        <img src={backgroundslash} alt="backgroundslash" style={{width: "100%", height: "auto", margin: "0"}} />
        <img style={backgroundImageStyle} src={reservewall} alt="reservewall" />
        <h1>Home Page</h1>
        </>
    )
    }

    export default Home;