import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleLinkClick = () => {
    setIsChecked(false);
  };
  const handleMenuButtonClick = (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du clic sur le bouton
    setIsChecked(!isChecked);
  };
  return (
    <div className="navigation">
      <div className="navbar">
        <ul>
          <a href="#">
            <li>Accueil</li>
          </a>
          <a href="#projets">
            <li>Projets</li>
          </a>
          <a href="#experiences">
            <li>Experiences</li>
          </a>
          <a href="#competences">
            <li>Compétences</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
      <div className="hamburger-menu">
        <input
          id="menu__toggle"
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <label
          className="menu__btn"
          htmlFor="menu__toggle"
          onClick={handleMenuButtonClick}
        >
          <span></span>
        </label>

        <ul className="menu__box">
          <li>
            <a className="menu__item" href="#" onClick={handleLinkClick}>
              Accueil
            </a>
          </li>
          <li>
            <a className="menu__item" href="#projets" onClick={handleLinkClick}>
              Projets
            </a>
          </li>
          <li>
            <a
              className="menu__item"
              href="#experiences"
              onClick={handleLinkClick}
            >
              Experiences
            </a>
          </li>
          <li>
            <a
              className="menu__item"
              href="#competences"
              onClick={handleLinkClick}
            >
              Compétences
            </a>
          </li>
          <li>
            <a className="menu__item" href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
