import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-pin"
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-mail"
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-linkedin"
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
            <div class="form__group field">
              <input
                type="input"
                class="form__field"
                placeholder="Prenom"
                name="user_firstname"
                id="firstname"
                required
              />
              <label for="from_firstname" class="form__label">
                Prénom
              </label>
            </div>
            <div class="form__group field">
              <input
                type="input"
                class="form__field"
                placeholder="Nom"
                name="user_lastname"
                id="lastname"
                required
              />
              <label for="from_lastname" class="form__label">
                Nom
              </label>
            </div>
          </div>

          <div class="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Email"
              name="user_email"
              id="email"
              required
            />
            <label for="from_email" class="form__label">
              Email
            </label>
          </div>
          <div className="form__group field">
            <textarea
              class="form__field"
              placeholder="Message"
              name="message"
              id="message"
              required
              rows={8}
            />
            <label for="message" class="form__label">
              Message
            </label>
          </div>

          <button className="btnForm">
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
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
            <span>Envoyer</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
