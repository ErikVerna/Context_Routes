import React from "react";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h2 className="navbar-brand mx-2 text-primary text-opacity-75">
          Context App
        </h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Togle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-4 mb-2 mb-lg-0"></ul>
          <li className="navbar-item my-2">
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Header;
