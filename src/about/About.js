import React from "react";
import AboutImage from "./aboutImage.jpeg";
import AboutAvatar from "./aboutAvatar.jpg";
import PersonIcon from "../icons/person.svg";
import NavButton from "../navbar/NavButton";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div className="aboutPage">
      <div className="aboutDescription">
        <h1>
          Poznaj mnie
          <img className="aboutPerson" src={PersonIcon} alt="" />
        </h1>
        <img className="aboutAvatar" src={AboutAvatar} alt="" />
        <p>Cześć!</p>
        <p>
          Mam 22 lata i jestem studentem trzeciego roku informatyki w
          Uniwersytecie Gdańskim.
        </p>
        <p>
          Przygodę z programowaniem zacząłem jakieś 5 lat temu i stale się
          rozwijam w tym kierunku.
        </p>
        <p>
          Chciałbym rozwijać się jako Front-End Developer lub Full Stack
          Developer, bo jest tutaj ogromne pole do popisu, mnogość technologii i
          wspaniała społeczność.
        </p>
        <p>
          Lubię pracę w zespole, nowe wyzwania, a komunikacja w języku
          angielskim nie jest dla mnie najmniejszym problemem!
        </p>
        <p>
          W wolnym czasie uczę się grać na pianinie, jeżdżę rowerem, przechadzam
          się po mieście, oglądam seriale i gram w gry.
        </p>
        <div className="aboutBtnPlace">
          <NavButton link="/skills" txt="Umiejętności" cname="aboutPageBtn" />
        </div>
      </div>
      <div className="aboutImage">
        <img src={AboutImage} alt="" />
      </div>
      <Helmet>
        <title>O mnie - Dawid Banachowski</title>
        <meta
          name="description"
          content="Mam 22 lata i jestem studentem trzeciego roku informatyki w Uniwersytecie Gdańskim..."
        />
      </Helmet>
    </div>
  );
}
