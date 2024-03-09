import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import corkbarrellogo from "../../images/corkbarrellogo.webp";
import "./Nav.css";

const NavigationBar = () => {
  const imgStyle = {
    height: "100px",
    width: "375px",
    boxShadow: "10px 5px 5px black",
    margin: "10px",
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
          <img src={corkbarrellogo} style={imgStyle} alt="home logo"></img>
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
        <NavDropdown title="More" id="basic-nav-dropdown">
          <NavDropdown.Item to="/About">About</NavDropdown.Item>
          <NavDropdown.Item to="/Contact">Contact</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
