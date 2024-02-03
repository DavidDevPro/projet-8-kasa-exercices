import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Locations from "./pages/Locations";
import Header from "./components/Header";

const Routeur = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </Router>
  );
};

export default Routeur;
