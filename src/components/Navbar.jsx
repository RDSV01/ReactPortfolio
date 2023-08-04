import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <a href="#">
          <li>Accueil</li>
        </a>
        <a href="#projets">
          <li>Projets</li>
        </a>
        <a href="#competences">
          <li>Compétences</li>
        </a>
        <a href="#">
          <li>Experience</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
