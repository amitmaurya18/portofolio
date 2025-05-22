import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Explore my projects and get to know more about me.</p>
      <img src="/images/profile.JPG" alt="profile" className="profile-img" />
    </div>
  );
}

export default Home;