import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/about">
       My Portfolio
      </Link>
      
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link
              to="/reactportfolio/about"
              className={window.location.pathname === "/reactportfolio/about" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/reactportfolio/projects"
              className={window.location.pathname === "/reactportfolio/projects" ? "nav-link active" : "nav-link"}
            >
              Projects
            </Link>
            </li>
            <li className="nav-item">
            <Link
              to="/reactportfolio/resume"
              className={window.location.pathname === "/reactportfolio/resume" ? "nav-link active" : "nav-link"}
            >
              Resume
            </Link>
          </li>
        </ul>
      
    </nav>
  );
}

export default Navbar;
