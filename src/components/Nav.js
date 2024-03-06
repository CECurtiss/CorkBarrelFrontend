import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/Wine" style={linkStyle}>Wine</Link>
        </div>
      </section>

      <section style={sectionStyle}>
        <div>
          <Link to="/Beer" style={linkStyle}>Beer</Link>
        </div>
      </section>

      <section>
        <Link to="/">
        <img src={corkbarrellogo} style={imgStyle}></img>
        </Link>
      </section>

      <section style={sectionStyle}>
        <div>
          <Link to="/Spirits"  style={linkStyle}>Spirits</Link>
        </div>
      </section>
{/* will be a drop down menu rather than a link */}
      <section style={sectionStyle}>
        <div>
          <Link to="/More" style={linkStyle}>More</Link>
        </div>
      </section>
    </nav>
  );
}

export default Nav;
