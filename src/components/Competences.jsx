import React from "react";
import "../styles/Competences.css";

const Competences = () => {
  return (
    <div className="competences" id="competences">
      <h1>Compétences</h1>
      <div className="typecompetences">
        <h2>Frameworks & CMS</h2>
        <ul>
          <li className="logocomp">
            <img src="../src/assets/icones/react.svg" alt="Logo react" />
            <span>React</span>
          </li>
          <li className="logocomp">
            <img src="../src/assets/icones/symfony.svg" alt="Logo react" />
            <span>Symfony</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Competences;
