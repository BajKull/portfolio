import React from "react";
import MenuIcon from "../icons/menu.svg";
import Home from "../icons/house.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navMenu">
      <button className="navMenuBtn menuBtn">
        <img src={MenuIcon} alt="" />
      </button>
      <Link to="/">
        <button className="navMenuBtn homeBtn">
          <img src={Home} alt="" />
        </button>
      </Link>
    </div>
  );
}
