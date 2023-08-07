import React from "react";
import "../styles/Formations.css";

const Formations = () => {
  return (
    <div className="formations" id="formations">
      <h2>Formations / Certifications</h2>
      <div className="groupformations">
        <div className="containerformations">
          <h3>Licence Inforamtique</h3>
          <span>2022 - 2023</span>
          <p>Campus la chataigneraie</p>
          <ul>
            <li>Gestion de projets</li>
            <li>Programmation</li>
            <li>Cybersecurité</li>
            <li>Réseau</li>
          </ul>
        </div>
        <div className="containerformations">
          <h3>BTS SIO</h3>
          <span>2020 - 2022</span>
          <p>Campus la chataigneraie</p>
          <ul>
            <li>Développement Web</li>
            <li>Développement Applicattif</li>
            <li>Cybersecurité</li>
            <li>Réseau</li>
          </ul>
        </div>
        <div className="containerformations">
          <h3>Certification RGPD</h3>
          <span>2021</span>

          <ul>
            <li>
              Certification relative au Règlement Géneral sur la Protection des
              Données
            </li>
          </ul>
        </div>
        <div className="containerformations">
          <h3>Certification ANSSI</h3>
          <span>2021</span>

          <ul>
            <li>
              Certification relative a l'Agence Nationale de la Sécurité des
              Systèmes d'Information
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Formations;
