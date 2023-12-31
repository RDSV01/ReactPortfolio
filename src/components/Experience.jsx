import "../styles/Experience.css";
import { Fade } from "react-awesome-reveal";

const Experience = () => {
  return (
    <div className="experience" id="experiences">
      <h2>Expériences</h2>
      <div className="timeline">
        <ul>
          <li>
            <Fade triggerOnce>
              <div className="content">
                <h3>3D Dental Store</h3>
                <span>2022 - 2023</span>
                <p>
                  - Développement de plugins WordPress<br></br>- Optimisation de
                  l'UX<br></br>- Intégrations d'APIs<br></br>- Interface entre
                  l'ERP et le site web<br></br>- Maintenance du site internet
                  <br></br>- Cadrage et spécification des projets de
                  développement
                  <br></br>- Growth-hacking (stratégies de croissance)<br></br>
                </p>
              </div>
            </Fade>
          </li>
          <li>
            <Fade triggerOnce>
              <div className="content">
                <h3>Neoma Coding School</h3>
                <span>2022</span>
                <p>
                  - Développeur pour la Coding School<br></br>- Création d'un
                  site web de locations de biens saisonniers
                </p>
              </div>
            </Fade>
          </li>
          <li>
            <Fade triggerOnce>
              <div className="content">
                <h3>WebRocket</h3>
                <span>2021</span>
                <p>
                  - Création d'un CRUD pour la gestion des utilisateurs avec
                  Symfony
                </p>
              </div>
            </Fade>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
