import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Dropdown, NavDropdown } from "react-bootstrap";

import corkbarrellogo from "../../images/corkbarrellogo.webp";
import "./Nav.css";

const Nav = ()  => {
  
  const imgStyle = { height: "100px", width: "375px", boxShadow: "10px 5px 5px black", margin: "10px" };
  
  const sectionStyle = {
    display: "flex",
    alignItems: "center",
    width: "30%",
    justifyContent: "center",
  };

  const navDropStyle = {
    textDecoration: "none",
    fontFamily: "georgia",
    fontSize: "35px",
    margin: "10px",
    color: "#054581",
    textShadow: "1px 1px 2px white",

  };

  return (
    
    <Navbar
      style={{
        display: "flex",
        backgroundColor: "rgb(120, 175, 58",
        justifyContent: "center",
      }}
    >
      <section style={sectionStyle}>
        <div>
          <Link to="/Wine" className="linkStyle">
            <p className="menuItem">Wine</p></Link>
        </div>
      </section>

      <section style={sectionStyle}>
        <div>
          <Link to="/Beer" className="linkStyle">
          <p className="menuItem">Beer</p>
          </Link>
        </div>
      </section>

      <section>
        <Link to="/">
        <img src={corkbarrellogo} style={imgStyle}></img>
        </Link>
      </section>

      <section style={sectionStyle}>
        <div>
          <Link to="/Spirits" className="linkStyle">
          <p className="menuItem">Spirits</p>
          </Link>
        </div>
      </section>
      <section style={sectionStyle}>
      <NavDropdown style={navDropStyle} title="More" id="basic-nav-dropdown">
        <NavDropdown.Item href="/About">About</NavDropdown.Item>
        <NavDropdown.Item href="/Contact">Contact</NavDropdown.Item>
      </NavDropdown>
      </section>
    </Navbar>
  );
}

export default Nav;
