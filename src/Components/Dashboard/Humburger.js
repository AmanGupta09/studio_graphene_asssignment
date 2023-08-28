import React, { useState } from "react";
import "./Humburger.css";

function Humburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <div className="container">
         
          <div className="navbar-toggle" onClick={toggleNavbar}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="content">{/* Your website content goes here */}</div>
    </div>
  );
}

export default Humburger;
