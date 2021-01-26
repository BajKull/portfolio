import React, { useState } from "react";
import Firebase from "firebase/app";
import "firebase/database";
import { Spinner } from "react-bootstrap";
import { Helmet } from "react-helmet";
import SendIcon from "./icons/send.svg";
import bg from "./bg.jpg";

export default function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  const messageResult = (success) => {
    document
      .getElementsByClassName("contactSend")[0]
      .classList.add("contactHidden");
    setPending(false);
    if (success) {
      document
        .getElementsByClassName("contactApproved")[0]
        .classList.remove("contactHidden");
    } else {
      document
        .getElementsByClassName("contactError")[0]
        .classList.remove("contactHidden");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPending(true);
    document.getElementsByClassName("contactSend")[0].disabled = true;
    const messageRef = Firebase.database().ref("messages");
    const newMessageRef = messageRef.push();
    newMessageRef
      .set({
        name: name,
        email: mail,
        msg: message,
      })
      .then(() => {
        messageResult(true);
      })
      .catch((err) => {
        console.log(err);
        messageResult(false);
      });
  };

  return (
    <div className="contact">
      <div className="bg"></div>
      <img src={bg} alt="" className="bgImg" />
      <h1>Skontaktuj się ze mną!</h1>
      <div className="contactForm">
        <p className="contactMail">bajkull@gmail.com</p>
        <img className="contactBg" src={SendIcon} alt="" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Imię</label>

          <input
            id="name"
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            value={mail}
            required
            onChange={(e) => setMail(e.target.value)}
          />
          <label htmlFor="message">Wiadomość</label>

          <textarea
            id="message"
            className="bigInput"
            type="text"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="contactBtn">
            <input className="contactSend" type="submit" value="Wyślij" />
            {pending && (
              <Spinner
                className="contactLoading"
                animation="border"
                variant="info"
              />
            )}
            <p className="contactSent contactApproved contactHidden">
              Wiadomość została wysłana!
            </p>
            <p className="contactSent contactError contactHidden">
              Błąd połączenia z bazą danych, spróbuj ponownie później.
            </p>
          </div>
        </form>
      </div>
      <Helmet>
        <title>Kontakt - Dawid Banachowski</title>
        <meta name="description" content="Skontaktuj się ze mną!" />
      </Helmet>
    </div>
  );
}
