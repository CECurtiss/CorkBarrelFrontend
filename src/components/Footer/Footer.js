import React from "react";
import { Link } from "react-router-dom";

import footerLogo from "../../images/corkbarrellogo.webp";
import facebookIcon from "../../images/icons/fbicon.png";
import instagramIcon from "../../images/icons/instaicon.png";
import xIcon from "../../images/icons/xicon7.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="container">
          <div className="footerLogoDiv">
            <img
              className="footerLogo"
              src={footerLogo}
              alt="Cork and Barrel Logo"
            ></img>
          </div>
          <div>
            <div className="row footerInfo">
              <div className="col-4 footerColumnHrs">
                <h2>Hours</h2>
                <p>Monday - Saturday: 9am - 11pm</p>
                <p>Sunday: 10am - 8pm</p>
              </div>

              <div className="col-4 footerColumnLoc">
                <h2>Locations</h2>
                <h3>
                  {" "}
                  <Link
                    to="https://maps.app.goo.gl/VKvrv1nC8pTBN1kY8"
                    target="_blank"
                  >
                    West
                  </Link>
                </h3>
                <p>1801 West 23rd St</p>
                <p>785-331-4242</p>
                <h3>
                  <Link
                    to="https://maps.app.goo.gl/7zDNGEm7oHT4JGwN8"
                    target="_blank"
                  >
                    Downtown
                  </Link>
                </h3>
                <p>901 Mississippi</p>
                <p>785-842-4450</p>
              </div>

              <div className="iconLinks col-4">
                <Link
                  to="https://www.facebook.com/corkandbarrel"
                  target="_blank"
                >
                  <img
                    className="icon"
                    src={facebookIcon}
                    alt="facebook icon"
                  ></img>
                </Link>

                <Link to="https://www.instagram.com/corkbarrel" target="_blank">
                  <img
                    className="icon"
                    src={instagramIcon}
                    alt="instagram icon"
                  ></img>
                </Link>

                <Link to="https://www.twitter.com/corkbarrel" target="_blank">
                  <img className="icon" src={xIcon} alt="twitter icon"></img>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
