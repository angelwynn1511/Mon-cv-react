import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () =>{
    setShowLinks(!showLinks);
  }
  console.log(showLinks);
  return (
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
          <ul className="navbar-links">
            <li className="navbar-items">
              <NavLink
                to="/presentation"
                className={({ isActive }) => (isActive ? "link active" : "link")}
                >
                Présentation
              </NavLink>
            </li>
            <li className="navbar-items">
              <NavLink
                to="/parcours"
                className={({ isActive }) => (isActive ? "link active" : "link")}
              >
                Parcours
              </NavLink>
            </li>
            <li className="navbar-items">
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "link active" : "link")}
                >
                Accueil
              </NavLink>
            </li>
            <li className="navbar-items">
              <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? "link active" : "link")}
                >
                Portfolio
              </NavLink>
            </li>
            <li className="navbar-items">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "link active" : "link")}
                >
                Contact
              </NavLink>
            </li>
          </ul>
        <button className="navbar_burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
      </nav>
  );
};

export default Navbar;
