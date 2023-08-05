import React from "react";
import "../styles/Projets.css";
import { Fade } from "react-awesome-reveal";
import Tilt from "react-parallax-tilt";

const Projets = () => {
  return (
    <div className="projets" id="projets">
      <div className="container">
        <p className="container-title">Projets</p>

        <div className="gradient-card-projects">
          <div className="card-project">
            <Fade>
              <div className="container-card-project bg-blue-box">
                <img src="../src/assets/img/Cursella_1.webp" alt="" />
                <p className="card-project-title">Cursella</p>
                <p className="card-project-description">
                  Site web de location de biens saisonniers.
                </p>
                <div className="badge-techno-projet">
                  <p>PHP</p>
                  <p>Javascript</p>
                  <p>MySQL</p>
                </div>
              </div>
            </Fade>
          </div>
          <div className="card-project">
            <Fade>
              <div className="container-card-project bg-blue-box">
                <img src="../src/assets/img/WfiProd.webp" alt="" />
                <p className="card-project-title">WfiProd</p>
                <p className="card-project-description">
                  Portfolio d'un vidéaste/photographe.
                </p>
                <div className="badge-techno-projet">
                  <p>React</p>
                </div>
              </div>
            </Fade>
          </div>
          <div className="card-project">
            <Fade>
              <div className="container-card-project bg-blue-box">
                <img src="../src/assets/img/3ds_faq.webp" alt="" />
                <p className="card-project-title">3D Dental Store</p>
                <p className="card-project-description">
                  Système de FAQ sur le site 3D Dental Store.
                </p>
                <div className="badge-techno-projet">
                  <p>Wordpress</p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <h2>
          Et d'autres projets ! N'hésitez pas à me contacter pour + d'infos.
        </h2>
      </div>
    </div>
  );
};

export default Projets;
