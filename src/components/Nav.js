import React from "react";
import corkbarrellogo from "../images/corkbarrellogo.webp";

const Nav = ()  => {
  const linkStyle = {
    textDecoration: "none",
    fontFamily: "georgia",
    fontSize: "25px",
    margin: "10px",
    color: "#054581",
    textShadow: "1px 1px 2px white",
  };
  const imgStyle = { height: "100px", width: "375px", boxShadow: "10px 5px 5px black", margin: "10px" };
  
  const sectionStyle = {
    display: "flex",
    alignItems: "center",
    width: "30%",
    justifyContent: "center",
  };

  return (
    <nav
      style={{
        display: "flex",
        backgroundColor: "rgb(120, 175, 58",
        justifyContent: "center",
      }}
    >
      <section style={sectionStyle}>
        <div >
          <a href="#Wine" style={linkStyle}>Wine</a>
        </div>
      </section>

      <section style={sectionStyle}>
        <div>
          <a href="#Beer" style={linkStyle}>Beer</a>
        </div>
      </section>

      <section>
        <img src={corkbarrellogo} style={imgStyle}></img>
      </section>

      <section style={sectionStyle}>
        <div>
          <a href="#Spirits"  style={linkStyle}>Spirits</a>
        </div>
      </section>

      <section style={sectionStyle}>
        <div>
          <a href="#More" style={linkStyle}>More</a>
        </div>
      </section>
    </nav>
  );
}

export default Nav;
