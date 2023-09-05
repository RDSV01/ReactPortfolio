import "../styles/Competences.css";
import Tilt from 'react-parallax-tilt';

const Competences = () => {
    const isMobile = () => {
    return window.innerWidth < 768; // Vous pouvez ajuster cette valeur si nécessaire
  };
  return (
    <div className="competences" id="competences">
      <h2>Compétences</h2>
      <div className="typecompetences">
        {isMobile() ? (
        <div className="compcontainer">
          <h3>Front-end</h3>
          <ul>
          <li className="logocomp">
              <img src="./assets/icones/vitejs.svg" alt="Logo vitejs" />
              <span>ViteJS</span>
            </li>
            <li className="logocomp">
              <img src="./assets/icones/react.svg" alt="Logo react" />
              <span>React</span>
            </li>
            <li className="logocomp">
              <img src="./assets/icones/javascript.svg" alt="Logo Javascript" />
              <span>Javascript</span>
            </li>
          </ul>
        </div>
        ) : (
          <Tilt>
        <div className="compcontainer">
          <h3>Front-end</h3>
          <ul>
          <li className="logocomp">
              <img src="./assets/icones/vitejs.svg" alt="Logo vitejs" />
              <span>ViteJS</span>
            </li>
            <li className="logocomp">
              <img src="./assets/icones/react.svg" alt="Logo react" />
              <span>React</span>
            </li>
            <li className="logocomp">
              <img src="./assets/icones/javascript.svg" alt="Logo Javascript" />
              <span>Javascript</span>
            </li>
          </ul>
        </div>
        </Tilt>
          )}
        <div className="compcontainer">
          <h3>Back-end</h3>
          <ul>
            <li className="logocomp">
              <img src="./assets/icones/symfony.svg" alt="Logo Symfony" />
              <span>Symfony</span>
            </li>
            <li className="logocomp">
              <img src="./assets/icones/php.svg" alt="Logo PHP" />
              <span>PHP</span>
            </li>
            <li className="logocomp">
              <img src="./assets/icones/mysql.svg" alt="Logo MySQL" />
              <span>MySQL</span>
            </li>
            <li className="logocomp">
              <img src="./assets/icones/oracle.svg" alt="Logo Oracle SQL" />
              <span>Oracle</span>
            </li>
            <li className="logocomp">
              <img src="./assets/icones/sqlserver.svg" alt="Logo SQL Server" />
              <span>SQL Server</span>
            </li>
          </ul>
        </div>
        <div className="compcontainer">
          <h3>CMS</h3>
          <ul>
            <li className="logocomp">
              <img src="./assets/icones/wordpress.svg" alt="Logo Wordpress" />
              <span>Wordpress</span>
            </li>
            <li className="logocomp">
              <img
                src="./assets/icones/woocommerce.svg"
                alt="Logo Woocommerce"
              />
              <span>Woocommerce</span>
            </li>
          </ul>
        </div>
        <div className="compcontainer">
          <h3>Autre</h3>
          <ul>
            <li className="logocomp">
              <img src="./assets/icones/git.svg" alt="Logo GIT" />
              <span>Git</span>
            </li>
            <li className="logocomp">
              <img src="./assets/icones/github.svg" alt="Logo GitHub" />
              <span>GitHub</span>
            </li>
            <li className="logocomp">
              <img src="./assets/icones/notion.svg" alt="Logo Notion" />
              <span>Notion</span>
            </li>
            <li className="logocomp">
              <img src="./assets/icones/rgpd.svg" alt="Logo RGPD" />
              <span>Certification RGPD</span>
            </li>
            <li className="logocomp">
              <img src="./assets/icones/anssi.svg" alt="Logo ANSSI" />
              <span>Certification ANSSI</span>
            </li>
            <li className="logocomp">
              <img src="./assets/icones/agile.svg" alt="Logo methode agile" />
              <span>Methode Agile</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Competences;
