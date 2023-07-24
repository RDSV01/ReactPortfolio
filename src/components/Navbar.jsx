import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/experience">
          <li>Experience</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
