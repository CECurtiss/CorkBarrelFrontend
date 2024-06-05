import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import corkbarrellogo from "../../images/corkbarrellogo.webp";
import "./Nav.css";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const imgStyle = {
    height: "100px",
    width: "375px",
    boxShadow: "10px 5px 5px black",
    margin: "10px",
  };

   const menuItemStyle= {
    display: "flex",
    alignItems: "center",
    width: "30%",
    justifyContent: "center",
    textDecoration: "none",
  };

  return (
    <Navbar style={{ position: "sticky" }} className="navbarStyle">
      <Nav style={menuItemStyle}>
       
          <NavLink to="/Wine" className="linkStyle">
            <p className="menuItem">Wine</p>
          </NavLink>
       
      </Nav>

      <Nav style={menuItemStyle}>
        <div>
          <NavLink to="/Spirits" className="linkStyle">
            <p className="menuItem">Spirits</p>
          </NavLink>
        </div>
      </Nav>

      <Nav style={menuItemStyle}>
        <NavLink to="/">
          <img src={corkbarrellogo} style={imgStyle} alt="home logo"></img>
        </NavLink>
      </Nav>

      <Nav style={menuItemStyle}>
        <div>
          <NavLink to="/Beer" className="linkStyle">
            <p className="menuItem">Beer</p>
          </NavLink>
        </div>
      </Nav>

      <Nav style={menuItemStyle}>
        <NavDropdown
          onMouseLeave={() => setExpanded(false)}
          onMouseEnter={() => setExpanded(true)}
          show={expanded}
          title="More"
          id="basic-nav-dropdown"
        >
          {/* <NavDropdown.Item as={Link} to="/Events">
            Upcoming Events
          </NavDropdown.Item> */}
          <NavDropdown.Item as={Link} to="/Application">
            Online Application
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Donation">
            Donation Request
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
