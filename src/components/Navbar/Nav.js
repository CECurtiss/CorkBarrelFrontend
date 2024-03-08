import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Dropdown, NavDropdown } from "react-bootstrap";

import corkbarrellogo from "../../images/corkbarrellogo.webp";
import "./Nav.css";

const NavigationBar = () => {
  const imgStyle = {
    height: "100px",
    width: "375px",
    boxShadow: "10px 5px 5px black",
    margin: "10px",
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
    <Navbar className="navbarStyle">
      <Nav className="menuItemStyle">
        <div>
          <NavLink to="/Wine" className="linkStyle">
            <p className="menuItem">Wine</p>
          </NavLink>
        </div>
      </Nav>

      <Nav className="menuItemStyle">
        <div>
          <NavLink to="/Beer" className="linkStyle">
            <p className="menuItem">Beer</p>
          </NavLink>
        </div>
      </Nav>

      <Nav className="menuItemStyle">
        <NavLink to="/">
          <img src={corkbarrellogo} style={imgStyle}></img>
        </NavLink>
      </Nav>

      <Nav className="menuItemStyle">
        <div>
          <NavLink to="/Spirits" className="linkStyle">
            <p className="menuItem">Spirits</p>
          </NavLink>
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
};

export default NavigationBar;
