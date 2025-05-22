import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/intro">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="cv-button">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="buttoncv">Download CV</button>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
