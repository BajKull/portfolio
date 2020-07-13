import React, { useState } from "react";
import Nodemailer from "nodemailer";

import MailIcon from "./icons/mail.svg";
import NameIcon from "./icons/name.svg";
import PencilIcon from "./icons/pencil.svg";
import SendIcon from "./icons/send.svg";

export default function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const account = Nodemailer.createTestAccount().then((response) => {
      console.log(response);
    });
    console.log(account);
  };

  return (
    <div className="contact">
      <div className="bg"></div>
      <h1>Skontaktuj się ze mną!</h1>
      <div className="contactForm">
        <img className="contactBg" src={SendIcon} alt="" />
        <form onSubmit={handleSubmit}>
          <label>
            <img src={NameIcon} alt="" />
            <input
              placeholder="Twoje imię:"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <img src={MailIcon} alt="" />
            <input
              placeholder="Twój e-mail:"
              type="text"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </label>
          <label>
            <img src={PencilIcon} alt="" />
            <textarea
              placeholder="Wiadomość:"
              className="bigInput"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <div className="contactBtn">
            <input className="contactSend" type="submit" value="Wyślij" />
          </div>
        </form>
      </div>
    </div>
  );
}
