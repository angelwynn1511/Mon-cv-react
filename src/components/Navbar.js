import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <div className="links">
          <NavLink
            to="/presentation"
            id="croissantL"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Présentation
          </NavLink>
          <NavLink
            to="/parcours"
            id="halfmoonL"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Parcours
          </NavLink>
          <NavLink
            to="/home"
            id="moon"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/portfolio"
            id="halfmoonR"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            id="croissantR"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
