import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services">
      <h1>My Services</h1>
      <div className="service-list">
        <div className="service">
          <h2>Web Development</h2>
          <p>Building responsive and dynamic websites using modern frameworks.</p>
        </div>
        <div className="service">
          <h2>UI/UX Design</h2>
          <p>Designing intuitive user interfaces with a great user experience.</p>
        </div>
        <div className="service">
          <h2>Backend Development</h2>
          <p>Creating scalable and secure backend systems with Java, Node.js and databases.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;