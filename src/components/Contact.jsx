import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import { Bounce, Slide } from "react-awesome-reveal";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
    setIsError(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isCheckboxChecked) {
      setIsError(true);
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        "service_2a5ed2p",
        "template_rrgqeof",
        form.current,
        "3w-RROCsvLndzqMr0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false);
          setIsSent(true);
          setIsError(false);
          form.current.reset();
          setIsCheckboxChecked(false);
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
          setIsSent(false);
          setIsError(true);
        }
      );
  };
  const closeErrorMessage = () => {
    setIsError(false);
    setIsSent(false);
  };
  useEffect(() => {
    if (isSent || isError) {
      const timeout = setTimeout(() => {
        closeErrorMessage();
      }, 15000);

      return () => clearTimeout(timeout);
    }
  }, [isSent, isError]);
  return (
    <div className="contact" id="contact">
      <h2>Contact</h2>
      <form ref={form} onSubmit={sendEmail}>
        <Bounce className="formfade" triggerOnce>
          <div className="reseaux">
            <p className="msgreseau">
              Vous n'aimez pas les formulaires ? Envoyez-moi un e-mail à
              l'adresse ci-dessous.
            </p>
            <p>
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
                className="lucide lucide-pin"
              >
                <line x1="12" x2="12" y1="17" y2="22" />
                <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
              </svg>
              Rouen, France
            </p>
            <p>
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
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <a href="mailto: contact@raphds.fr">contact@raphds.fr</a>
            </p>
            <div className="mesuivre">
              <h3>Me suivre</h3>
            <p>
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
              <a
                target="_blank"
                href="https://www.linkedin.com/in/raphaeldasilva1/"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <p>
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
              <a
                target="_blank"
                href="https://github.com/RDSV01"
                rel="noreferrer"
              >
                GitHub
              </a>
            </p>
             <p>
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
              <a
                target="_blank"
                href="https://www.malt.fr/profile/raphaeldasilva"
                rel="noreferrer"
              >
                Malt
              </a>
            </p>
            </div>
          </div>
        </Bounce>
        <Bounce triggerOnce>
          <div className="formulaire">
            <h3>Formulaire de contact</h3>

            <div className="nomprenom">
              <div className="form__group field">
                <input
                  type="input"
                  className="form__field"
                  placeholder="Prenom"
                  name="user_firstname"
                  id="firstname"
                  required
                  maxLength={40}
                />
                <label htmlFor="firstname" className="form__label">
                  Prénom
                </label>
              </div>
              <div className="form__group field">
                <input
                  type="input"
                  className="form__field"
                  placeholder="Nom"
                  name="user_lastname"
                  id="lastname"
                  required
                  maxLength={40}
                />
                <label htmlFor="lastname" className="form__label">
                  Nom
                </label>
              </div>
            </div>

            <div className="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="Email"
                name="user_email"
                id="email"
                required
                maxLength={50}
              />
              <label htmlFor="email" className="form__label">
                Email
              </label>
            </div>
            <div className="form__group field">
              <textarea
                className="form__field"
                placeholder="Message"
                name="message"
                id="message"
                required
                rows={8}
                maxLength={2000}
              />
              <label htmlFor="message" className="form__label">
                Message
              </label>
            </div>
            <div className="rgpd">
              <input
                type="checkbox"
                id="cbx"
                name="test"
                checked={isCheckboxChecked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="cbx" className="check">
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                  <polyline points="1 9 7 14 15 4"></polyline>
                </svg>
              </label>
              <label>
                En cochant cette case, j'accepte la{" "}
                <a target="_blank" href="/donnees-personnelles">
                  politique de protection des données personnelles.
                </a>
              </label>
            </div>
            {isSent && (
              <Bounce>
                <div className="msginfo envoye">
                  <p>Votre message à bien été envoyé.</p>
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
                    className="lucide lucide-x"
                    onClick={closeErrorMessage}
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </div>
              </Bounce>
            )}
            {isError && (
              <Bounce>
                <div className="msginfo erreur">
                  <p>
                    {!isCheckboxChecked
                      ? "Veuillez accepter la politique de protection des données personnelles pour continuer."
                      : "Une erreur est survenue. Veuillez réessayer."}
                  </p>
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
                    className="lucide lucide-x"
                    onClick={closeErrorMessage}
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </div>
              </Bounce>
            )}
            <button className="btnForm">
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>

              <span>{isSending ? "Envoi en cours..." : "Envoyer"}</span>
            </button>
          </div>
        </Bounce>
      </form>
    </div>
  );
};

export default Contact;
