import React from "react";
import VIPForm from "../../components/VIPForm";

import "./Wine.css";


const Wine = () => {
  return (
    <div>
      <div className="wineHomeImg">
        <h1>Wine</h1>
      </div>
      <div className="col-12 VIPContainer">
        <h2 className="col-6">VIP Wine Club Text</h2>
        <VIPForm />
      </div>
    </div>
  );
};

export default Wine;
