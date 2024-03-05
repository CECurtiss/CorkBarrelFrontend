import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <div>
          <h1>App</h1>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
