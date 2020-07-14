import React, { useEffect } from "react";
// import MenuIcon from "../icons/menu.svg";
import HomeIcon from "../icons/house.svg";
import ContactIcon from "../icons/contact.svg";
import ProjectsIcon from "../icons/work.svg";
import SkillsIcon from "../icons/skills.svg";
import AboutIcon from "../icons/about.svg";
import Background from "../icons/bg3.svg";
import { Link } from "react-router-dom";

export default function Navbar({ path }) {
  useEffect(() => {
    const paths = Array.from(
      document.getElementsByClassName("navMenu")[0].children
    );
    const currentPath = paths.find(
      (el) => el.href.replace(/.*\/\/[^/]*/, "") === path.pathname
    );
    paths.forEach((el) => el.classList.remove("navActive"));
    currentPath.classList.add("navActive");
  });

  return (
    <div className="navMenu">
      <Link to="/">
        <button className="navMenuBtn">
          <img src={HomeIcon} alt="" />
        </button>
      </Link>
      <Link to="/projects">
        <button className="navMenuBtn">
          <img src={ProjectsIcon} alt="" />
        </button>
      </Link>
      <Link to="/about">
        <button className="navMenuBtn">
          <img src={AboutIcon} alt="" />
        </button>
      </Link>
      <Link to="/skills">
        <button className="navMenuBtn">
          <img src={SkillsIcon} alt="" />
        </button>
      </Link>
      <Link to="/contact">
        <button className="navMenuBtn">
          <img src={ContactIcon} alt="" />
        </button>
      </Link>
      <div className="navbarBg">
        <img src={Background} alt="" />
      </div>
    </div>
  );
}
