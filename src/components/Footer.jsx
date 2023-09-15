import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <p>©Copyright 2023 - Raphaël DA SILVA | Développé avec ReactJs ⚛️ | Fait avec ❤️ à Rouen.</p>
      <Link to="/donnees-personnelles">Données Personnelles</Link>
    </div>
  );
};

export default Footer;
