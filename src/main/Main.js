import React from "react";

import EyeIcon from "../icons/eye.svg";
import EveOverIcon from "../icons/linesOverEye.svg";
import MenuIcon from "../icons/menu.svg";
import MenuIcon2 from "../icons/menu2.svg";

export default function Main() {
  return (
    <div className="mainPage">
      <div className="mainBg"></div>
      <div className="mainMenu">
        <button
          className="mainBtnMenu"
          onFocus={(e) => (e.currentTarget.childNodes[0].src = MenuIcon2)}
          onBlur={(e) => (e.currentTarget.childNodes[0].src = MenuIcon)}
          onMouseOver={(e) => (e.currentTarget.childNodes[0].src = MenuIcon2)}
          onMouseOut={(e) => (e.currentTarget.childNodes[0].src = MenuIcon)}
        >
          <img src={MenuIcon} alt="" />
        </button>
      </div>
      <h1> Mam to coś </h1>
      <button className="mainBtnProjects">
        <p>Projekty</p>
        <img className="eyeLines" src={EveOverIcon} alt="" />
        <img className="eyeIcon" src={EyeIcon} alt="" />
      </button>
      <h4 className="mainDesc">
        <div className="leftLineDesc"></div>
        Witam, nazywam się Dawid, a to moje portfolio!
      </h4>
    </div>
  );
}
