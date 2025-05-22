import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Portfolio</h1>
      <div className="social-links">
        <a href="https://www.instagram.com/amit_maurya_18/" className="fa fa-instagram" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://www.linkedin.com/in/amitmaurya18/" className="fa fa-linkedin" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://www.youtube.com/channel/UCGCHOOIbgT_gX_0ZAiMOqBg" className="fa fa-youtube" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://twitter.com/amit_maurya_18?s=08" className="fa fa-twitter" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://github.com/amitmaurya18" className="fa fa-github" target="_blank" rel="noopener noreferrer"></a>
      </div>
    </header>
  );
}

export default Header;