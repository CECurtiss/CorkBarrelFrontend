import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Dropdown, NavDropdown } from "react-bootstrap";

import corkbarrellogo from "../../images/corkbarrellogo.webp";
import "./Nav.css";

const NavigationBar = ()  => {
  
  const imgStyle = { height: "100px", width: "375px", boxShadow: "10px 5px 5px black", margin: "10px" };
  
  const navDropStyle = {
    textDecoration: "none",
    fontFamily: "georgia",
    fontSize: "35px",
    margin: "10px",
    color: "#054581",
    textShadow: "1px 1px 2px white",

  };

  return (
    
    <Navbar className="navbarStyle">
      <Nav className="menuItemStyle">
        <div>
          <Link to="/Wine" className="linkStyle">
            <p className="menuItem">Wine</p></Link>
        </div>
      </Nav>

      <Nav className="menuItemStyle">
        <div>
          <Link to="/Beer" className="linkStyle">
          <p className="menuItem">Beer</p>
          </Link>
        </div>
      </Nav>

      <Nav className="menuItemStyle">
        <Link to="/">
        <img src={corkbarrellogo} style={imgStyle}></img>
        </Link>
      </Nav>

      <Nav className="menuItemStyle">
        <div>
          <Link to="/Spirits" className="linkStyle">
          <p className="menuItem">Spirits</p>
          </Link>
        </div>
      </Nav>
      <Nav className="menuItemStyle">
      <NavDropdown style={navDropStyle} title="More" id="basic-nav-dropdown">
        <NavDropdown.Item href="/About">About</NavDropdown.Item>
        <NavDropdown.Item href="/Contact">Contact</NavDropdown.Item>
      </NavDropdown>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
