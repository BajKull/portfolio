import React from "react";
import Icons from "./Icons";
import NavButton from "../navbar/NavButton";

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
      <NavButton link="/contact" txt="Kontakt" cname="skillsBtn" />
    </div>
  );
}
