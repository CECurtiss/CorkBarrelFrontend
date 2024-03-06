import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Wine from "./pages/Wine";
import Beer from "./pages/Beer";
import Spirits from "./pages/Spirits";
import Nav from "./components/Navbar/Nav.js";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Wine" element={<Wine />} />
            <Route path="/Beer" element={<Beer />} />
            <Route path="/Spirits" element={<Spirits />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
