import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Pdf from "../Roice_Liu_resume_java.pdf";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function NavbarPrev() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenuWindow = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMenuWindow}>
            Roice Liu
          </Link>

          <Link className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </Link>

          <ul className={click ? "navbar-menu active" : "navbar-menu"}>
            <li className="nav-item">
              <Link
                smooth
                to="#about"
                className="nav-links"
                onClick={closeMenuWindow}
              >
                01. About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth
                to="#experience"
                className="nav-links"
                onClick={closeMenuWindow}
              >
                02. Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth
                to="#work"
                className="nav-links"
                onClick={closeMenuWindow}
              >
                03. Work
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth
                to="#contact"
                className="nav-links"
                onClick={closeMenuWindow}
              >
                04. Contact
              </Link>
            </li>
            <li className="nav-button">
              <a
                href={Pdf}
                target="_blank"
                className="nav-btnLinks"
                onClick={closeMenuWindow}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavbarPrev;
