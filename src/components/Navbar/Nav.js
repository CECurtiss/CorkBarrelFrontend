import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Dropdown, NavDropdown } from "react-bootstrap";

import corkbarrellogo from "../../images/corkbarrellogo.webp";
import "./Nav.css";

const Nav = ()  => {
  
  const imgStyle = { height: "100px", width: "375px", boxShadow: "10px 5px 5px black", margin: "10px" };
  
  // const sectionStyle = {
  //   display: "flex",
  //   alignItems: "center",
  //   width: "30%",
  //   justifyContent: "center",
  // };

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
      className="navbarStyle"
      >
      <section className="menuStyle">
        <div>
          <Link to="/Wine" className="linkStyle">
            <p className="menuItem">Wine</p></Link>
        </div>
      </section>

      <section className="sectionStyle">
        <div>
          <Link to="/Beer" className="linkStyle">
          <p className="menuItem">Beer</p>
          </Link>
        </div>
      </section>

      <Navbar.Brand>
        <Link to="/">
        <img src={corkbarrellogo} style={imgStyle}></img>
        </Link>
      </Navbar.Brand>

      <section className="sectionStyle">
        <div>
          <Link to="/Spirits" className="linkStyle">
          <p className="menuItem">Spirits</p>
          </Link>
        </div>
      </section>
      <section className="sectionStyle">
      <NavDropdown style={navDropStyle} title="More" id="basic-nav-dropdown">
        <NavDropdown.Item href="/About">About</NavDropdown.Item>
        <NavDropdown.Item href="/Contact">Contact</NavDropdown.Item>
      </NavDropdown>
      </section>
    </Navbar>
  );
}

export default Nav;
