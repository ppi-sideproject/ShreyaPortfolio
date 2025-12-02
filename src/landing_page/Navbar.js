import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const closeMobileMenu = () => {
    const menu = document.querySelector(".navbar-collapse");
    if (menu && menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{ backgroundColor: "#fbfbfb", zIndex: 1000 }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="/ShreyaPortfolio/media/images/portlogo.png"
            alt="logo"
            style={{ maxWidth: "70px", height: "auto" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  currentPath === "/" ? "active fw-bold text-navy" : ""
                }`}
                to="/"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  currentPath === "/about" ? "active fw-bold text-navy" : ""
                }`}
                to="/about"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  currentPath === "/project" ? "active fw-bold text-navy" : ""
                }`}
                to="/project"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  currentPath === "/contact" ? "active fw-bold text-navy" : ""
                }`}
                to="/contact"
                onClick={closeMobileMenu}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
