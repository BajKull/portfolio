import React from "react";
import Icons from "./Icons";

import EyeIcon from "../icons/eye.svg";
import EveOverIcon from "../icons/linesOverEye.svg";
import { Link } from "react-router-dom";

export default function Skills() {
  return (
    <div className="skills">
      <div className="bg"></div>
      <h1>Moje umiejętności</h1>
      {/* <img className="bg" src={Screen} alt="" /> */}
      <div className="skillsIcons">
        {Icons.map((icon) => (
          <div className="skillsCard" key={icon.name}>
            <div className="skillsTopBar" />
            <div className="skillsIcon">
              <img src={icon.icon} alt="" />
            </div>
            <h4>{icon.name}</h4>
          </div>
        ))}
      </div>
      <Link to="/contact">
        <button className="skillsBtn navigationButton">
          <p>Kontakt</p>
          <img className="eyeLines" src={EveOverIcon} alt="" />
          <img className="eyeIcon" src={EyeIcon} alt="" />
        </button>
      </Link>
    </div>
  );
}
