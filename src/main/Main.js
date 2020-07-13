import React from "react";

import EyeIcon from "../icons/eye.svg";
import EveOverIcon from "../icons/linesOverEye.svg";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="mainPage">
      <div className="mainBg"></div>

      <h1> Mam to coś </h1>
      <Link to="/projects">
        <button className="mainBtnProjects navigationButton">
          <p>Projekty</p>
          <img className="eyeLines" src={EveOverIcon} alt="" />
          <img className="eyeIcon" src={EyeIcon} alt="" />
        </button>
      </Link>
      <h4 className="mainDesc">
        <div className="leftLineDesc"></div>
        Witam, nazywam się Dawid, a to moje portfolio!
      </h4>
    </div>
  );
}
