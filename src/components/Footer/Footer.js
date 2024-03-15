import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <div className="footerContainer">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h3>Hours</h3>
            <p>Monday - Saturday: 9am - 11pm</p>
            <p>Sunday: 10am - 8pm</p>
          </div>

          <div className="col-4">
            <h3>Location</h3>
            <p>1234 Main St.</p>
            <p>Anytown, USA 12345</p>
          </div>

          <div className="col-4">
            <h3>Contact</h3>
            <p>Phone: 123-456-7890</p>
            <p>Email:</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
