import React from "react";
import "./Wine.css";

const Wine = () => {
  return (
    <div>
      <div className="wineHomeImg">
        <h1>Wine</h1>
      </div>
      <div className="col-12 VIPContainer">
        <h2 className="col-6">VIP Wine Club Text</h2>
        <form className="col-6 VIPFormStyle">
          <h2>Get Wine Updates!</h2>
          <h4>News From Cork & Barrel to your Inbox</h4>
          <label> Name:</label>
          <input type="text" name="name" />

          <label> Email:</label>
          <input type="text" name="email" />

          <label> Phone:</label>
          <input type="text" name="phone" />

          <label>Email Lists</label>
          <label for="GeneralInterest">
          <input type="checkbox" id="GeneralInterest" name="General Interest" />
          General Interest</label>

          <label for="VIPWineClub">
          <input type="checkbox" id="VIPWineClub" name="VIP Wine Club" />
          VIP Wine Club</label>

          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Wine;
