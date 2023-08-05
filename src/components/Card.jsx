import React from "react";
import "../styles//Card.css";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import Tilt from "react-parallax-tilt";

const Card = () => {
  return (
    <div className="card">
      <Slide duration={800} triggerOnce>
        <div className="texte">
          <p>Bienvenu ! Je suis</p>
          <h1>
            Raphaël <span>Da Silva</span>
          </h1>
          <h2>Développeur FullStack.</h2>
          <h3>Passionné depuis mes 16 ans et fier d'en faire mon métier.</h3>
          <div className="boutonsReseaux">
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/raphaeldasilva1/"
            >
              <button>
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                </div>
                <span>Linkedin</span>
              </button>
            </Link>
            <Link target="_blank" to="https://github.com/RDSV01">
              <button>
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </div>
                </div>
                <span>GitHub</span>
              </button>
            </Link>
            {/* <Link
              target="_blank"
              to="https://www.malt.fr/profile/raphaeldasilva"
            >
              <button>
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Malt"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        width="512"
                        height="512"
                        rx="15%"
                        fill="none"
                        d="M0.137 0H23.863A0.137 0.137 0 0 1 24 0.137V23.863A0.137 0.137 0 0 1 23.863 24H0.137A0.137 0.137 0 0 1 0 23.863V0.137A0.137 0.137 0 0 1 0.137 0z"
                      />
                      <path
                        fill="#fff"
                        d="M19.144 4.866c-1.523 -1.519 -3.145 -0.534 -4.162 0.478L5.381 14.944c-1.017 1.017 -2.081 2.564 -0.478 4.162 1.598 1.598 3.141 0.534 4.158 -0.483l9.6 -9.6c1.017 -1.013 2.002 -2.639 0.483 -4.158zm-9.173 -0.394 2.034 2.034 2.067 -2.072c0.141 -0.141 0.281 -0.272 0.427 -0.394 -0.216 -1.092 -0.839 -2.081 -2.498 -2.081S9.717 2.953 9.506 4.045c0.155 0.136 0.309 0.272 0.464 0.427zm4.102 15.098 -2.067 -2.067 -2.034 2.03c-0.155 0.155 -0.305 0.3 -0.459 0.431 0.234 1.116 0.891 2.133 2.489 2.133 1.603 0 2.264 -1.027 2.494 -2.142 -0.141 -0.122 -0.281 -0.244 -0.422 -0.384zm-4.964 -10.172h-3.919c-1.439 0 -3.281 0.455 -3.281 2.602 0 1.608 1.027 2.264 2.147 2.494 0.131 -0.15 5.053 -5.095 5.053 -5.095zm10.852 0.108c-0.122 0.141 -5.058 5.1 -5.058 5.1h3.863c1.439 0 3.281 -0.342 3.281 -2.606 0 -1.655 -0.989 -2.278 -2.086 -2.494zm-9.567 -1.392 0.698 -0.698 -2.03 -2.034c-1.017 -1.017 -2.559 -2.081 -4.162 -0.478 -1.172 1.172 -0.909 2.316 -0.291 3.239 0.192 -0.014 5.784 -0.028 5.784 -0.028zM13.612 15.891l-0.703 0.703 2.072 2.067c1.017 1.017 2.639 2.002 4.158 0.483 1.134 -1.134 0.877 -2.33 0.248 -3.281 -0.202 0.014 -5.775 0.028 -5.775 0.028z"
                      />
                    </svg>
                  </div>
                </div>
                <span>Malt</span>
              </button>
            </Link> */}
          </div>
        </div>
      </Slide>
      <Slide direction="right" duration={800} triggerOnce>
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
          <div className="photoprofile">
            <img
              src="../src/assets/img/pp.webp"
              alt="Photo de profile du site"
            />
          </div>
        </Tilt>
      </Slide>
    </div>
  );
};

export default Card;
