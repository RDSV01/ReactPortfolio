import React from "react";
import "../styles//Card.css";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card">
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
        </div>
      </div>
      <div className="photoprofile">
        <img src="../src/assets/img/pp.jpg" alt="Photo de profile du site" />
      </div>
    </div>
  );
};

export default Card;
