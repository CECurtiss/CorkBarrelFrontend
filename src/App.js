import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollButton from "./components/ScrollButton/ScrollButton.js";

import Home from "./pages/Home/Home";
import Wine from "./pages/Wine/Wine.js";
import Beer from "./pages/Beer/Beer.js";
import Spirits from "./pages/Spirits/Spirits.js";
import NavigationBar from "./components/Navbar/Nav.js";
import LoginBar from "./components/Login Bar/Login.js";
// import Events from "./pages/Events";
import Application from "./pages/Application/Application.js";
import DonationRequest from "./pages/DonationRequest/DonationRequest.js";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer/Footer.js";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <LoginBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* route below for gh pages home route load */}
            <Route path="/Corkbarrelfrontend" element={<Home />} />
            <Route path="/Wine" element={<Wine />} />
            <Route path="/Beer" element={<Beer />} />
            <Route path="/Spirits" element={<Spirits />} />
            {/* <Route path="/Events" element={<Events />} /> */}
            <Route path="/Application" element={<Application />} />
            <Route path="/Donation" element={<DonationRequest />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </div>
        <ScrollButton />
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

/* <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes> */