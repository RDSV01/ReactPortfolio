import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import DonneesPersonnelles from "./../pages/DonneesPersonnelles";

const Footer = () => {
  return (
    <div className="footer">
      <p>Fait avec ❤️ à Rouen.</p>
      <Link to="/donnees-personnelles">Données Personnelles</Link>
    </div>
  );
};

export default Footer;
