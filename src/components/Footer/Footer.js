import React from "react";
import { Link } from "react-router-dom";

import facebookIcon from "../../images/icons/fbicon.png";
import instagramIcon from "../../images/icons/instaicon.png";
import xIcon from "../../images/icons/xicon7.png";
import "./Footer.css";



const Footer = () => {
  return (
    <>
    <div className="footerContainer">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h3>Hours</h3>
            <p>Monday - Saturday: 9am - 11pm</p>
            <p>Sunday: 10am - 8pm</p>
          </div>

          <div className="col-3">
            <h3>Locations</h3>
            <p>1801 West 23rd St</p>
            <p>901 Mississippi</p>
          </div>

          <div className="col-3">
            <h3>Contact</h3>
            <p>Phone: 123-456-7890</p>
            <p>Email:</p>
          </div>

          <div className="iconLinks col-3">
            <h3>Follow Us</h3>
            <Link to="https://www.facebook.com/corkandbarrel" target="_blank">
              <img className="icon" src={facebookIcon} alt="facebook icon"></img>
            </Link>

            <Link to="https://www.instagram.com/corkbarrel" target="_blank">
              <img className="icon" src={instagramIcon} alt="instagram icon"></img>
            </Link>

            <Link to="https://www.twitter.com/corkbarrel" target="_blank">
              <img className="icon" src={xIcon} alt="twitter icon"></img>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
