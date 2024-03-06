import React from 'react';
import storefront from "../images/storefront.jpg";

const Home = () => {
    const storefrontStyle = {
        width: "100%",
        height: "auto",
        margin: "0",
    }
    return (
        <>
        <img style={storefrontStyle} src={storefront} alt="storefront" />
        <h1>Home Page</h1>
        </>
    )
    }

    export default Home;