import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Wine from "./pages/Wine";
import Beer from "./pages/Beer";
import Spirits from "./pages/Spirits";
import NavigationBar from "./components/Navbar/Nav.js";
import Events from "./pages/Events";
import Application from "./pages/Application";
import DonationRequest from "./pages/DonationRequest";
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Wine" element={<Wine />} />
            <Route path="/Beer" element={<Beer />} />
            <Route path="/Spirits" element={<Spirits />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Application" element={<Application />} />
            <Route path="/Donation" element={<DonationRequest />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;

// consider:
// move routes intoa route file, then store them in an array and map over them to create the routes
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';

// const routes = [
//   { path: '/', component: <Home />, exact: true },
//   { path: '/about', component: <About /> },
//   { path: '/contact', component: <Contact /> },
// ];

// export default routes;

{/* <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes> */}