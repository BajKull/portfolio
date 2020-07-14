import React from "react";
import { Link } from "react-router-dom";
import EyeIcon from "../icons/eye.svg";
import EveOverIcon from "../icons/linesOverEye.svg";

export default function NavButton({ link, txt, cname }) {
  return (
    <Link to={link}>
      <button className={cname + " navigationButton"}>
        <p>{txt}</p>
        <img className="eyeLines" src={EveOverIcon} alt="" />
        <img className="eyeIcon" src={EyeIcon} alt="" />
      </button>
    </Link>
  );
}
