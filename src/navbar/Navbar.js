import React from "react";
import MenuIcon from "../icons/menu.svg";
import HomeIcon from "../icons/house.svg";
import ContactIcon from "../icons/contact.svg";
import ProjectsIcon from "../icons/work.svg";
import SkillsIcon from "../icons/skills.svg";
import AboutIcon from "../icons/about.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navMenu">
      {/* <button
        onClick={() => setSideBar(!sideBar)}
        className="navMenuBtn menuBtn"
      >
        <img src={MenuIcon} alt="" />
      </button>
      {sideBar && <SideBar />} */}
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
    </div>
  );
}
