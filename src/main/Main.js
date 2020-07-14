import React from "react";

import NavButton from "../navbar/NavButton";

export default function Main() {
  return (
    <div className="mainPage">
      <div className="mainBg"></div>

      <h1> Mam to coś </h1>
      <NavButton link="/projects" txt="Projekty" cname="mainBtnProjects" />
      <h4 className="mainDesc">
        <div className="leftLineDesc"></div>
        Witam, nazywam się Dawid, a to moje portfolio!
      </h4>
    </div>
  );
}
