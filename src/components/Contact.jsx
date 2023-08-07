import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import { Bounce } from "react-awesome-reveal";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
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
        "service_fgv2yku",
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
        <div className="reseaux">
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
            raphds76@gmail.com
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
              className="lucide lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/raphaeldasilva1/"
            >
              raphaeldasilva1
            </a>
          </p>
        </div>
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
              <label htmlFor="from_firstname" className="form__label">
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
              <label htmlFor="from_lastname" className="form__label">
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
            <label htmlFor="from_email" className="form__label">
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
      </form>
    </div>
  );
};

export default Contact;
