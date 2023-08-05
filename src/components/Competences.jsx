import React from "react";
import "../styles/Competences.css";

const Competences = () => {
  return (
    <div className="competences" id="competences">
      <h1>Compétences</h1>
      <div className="typecompetences">
        <ul>
          <h2>CMS</h2>
          <li className="logocomp">
            <img
              src="../src/assets/icones/wordpress.svg"
              alt="Logo Wordpress"
            />
            <span>Wordpress</span>
          </li>
          <li className="logocomp">
            <img
              src="../src/assets/icones/woocommerce.svg"
              alt="Logo Woocommerce"
            />
            <span>Woocommerce</span>
          </li>
        </ul>
        <ul>
          <h2>Front-end</h2>
          <li className="logocomp">
            <img src="../src/assets/icones/react.svg" alt="Logo react" />
            <span>React</span>
          </li>
          <li className="logocomp">
            <img
              src="../src/assets/icones/javascript.svg"
              alt="Logo Javascript"
            />
            <span>Javascript</span>
          </li>
        </ul>
        <ul>
          <h2>Back-end</h2>
          <li className="logocomp">
            <img src="../src/assets/icones/symfony.svg" alt="Logo Symfony" />
            <span>Symfony</span>
          </li>
          <li className="logocomp">
            <img src="../src/assets/icones/php.svg" alt="Logo PHP" />
            <span>PHP</span>
          </li>
          <li className="logocomp">
            <img src="../src/assets/icones/mysql.svg" alt="Logo MySQL" />
            <span>MySQL</span>
          </li>
          <li className="logocomp">
            <img src="../src/assets/icones/oracle.svg" alt="Logo Oracle SQL" />
            <span>Oracle</span>
          </li>
          <li className="logocomp">
            <img
              src="../src/assets/icones/sqlserver.svg"
              alt="Logo SQL Server"
            />
            <span>SQL Server</span>
          </li>
        </ul>
        <ul>
          <h2>Autre</h2>
          <li className="logocomp">
            <img src="../src/assets/icones/git.svg" alt="Logo GIT" />
            <span>Git</span>
          </li>
          <li className="logocomp">
            <img src="../src/assets/icones/github.svg" alt="Logo GitHub" />
            <span>GitHub</span>
          </li>
          <li className="logocomp">
            <img src="../src/assets/icones/notion.svg" alt="Logo Notion" />
            <span>Notion</span>
          </li>
          <li className="logocomp">
            <img src="../src/assets/icones/rgpd.svg" alt="Logo RGPD" />
            <span>Certification RGPD</span>
          </li>
          <li className="logocomp">
            <img src="../src/assets/icones/anssi.svg" alt="Logo ANSSI" />
            <span>Certification ANSSI</span>
          </li>
          <li className="logocomp">
            <img
              src="../src/assets/icones/agile.svg"
              alt="Logo methode agile"
            />
            <span>Methode Agile</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Competences;
