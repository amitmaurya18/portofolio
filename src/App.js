import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "./style.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header /> 
        <div className="content-wrapper">
          <Sidebar /> 
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/intro" element={<Intro />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
