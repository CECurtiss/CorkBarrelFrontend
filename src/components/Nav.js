import React from "react";
import corkbarrellogo from "../images/corkbarrellogo.webp";

function Nav() {
  const linkStyle = {
    margin: "auto",
    textDecoration: "none",
    fontFamily: "helvetica",
    fontSize: "20px",
  };
  const imgStyle = { height: "150px", width: "450px", padding: "10px" };

//   const sectionStyle={
//     backgroundColor: "red",
//   };
  return (
    <nav style={{ display: "flex", alignItems: "center", backgroundColor: "rgb(120, 175, 58", }}>
      <section style={{display: "flex"}}>
        
          <div style={linkStyle}>
            <a href="#Wine">Wine</a>
          </div>
          <div style={linkStyle}>
            <a href="#Beer">Beer</a>
          </div>
          <div style={linkStyle}>
            <a href="#Spirits">Spirits</a>
          </div>
          <div style={linkStyle}>
            <a href="#About">About</a>
          </div>
        </section>
        <section>
        <img src={corkbarrellogo} style={imgStyle}></img>
        </section>
        <section>
        <div style={linkStyle}>
            <a href="#Specials">Monthly Specials</a>
          </div>
          <div style={linkStyle}>
            <a href="#Locations">Locations</a>
          </div>
          <div style={linkStyle}>
            <a href="#Contact">Contact Us</a>
          </div>
          <div style={linkStyle}>
            <a href="#Events">Events</a>
          </div>
      </section>
    </nav>
  );
}

export default Nav;
