import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavButton from "../navbar/NavButton";

export default function Main() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }, []);
  return (
    <div className="mainPage">
      <div className="mainBg"></div>

      <h1> Mam to coś </h1>
      <NavButton link="/projects" txt="Projekty" cname="mainBtnProjects" />
      <h4 className="mainDesc">
        <div className="leftLineDesc"></div>
        Witam, nazywam się Dawid, a to moje portfolio!
      </h4>

      <Helmet>
        <title>Dawid Banachowski</title>
        <meta
          name="description"
          content="Dawid Banachowski - strona portfolio"
        />
      </Helmet>
    </div>
  );
}
