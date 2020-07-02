import React from "react";
import Project from "./Project";
import data from "./data/ProjectData";

import ArrowLeft from "../icons/arrowLeft.svg";
import ArrowRight from "../icons/arrowRight.svg";

export default function Projects() {
  return (
    <div className="projects">
      <h1 className="projectsTitle">Moje projekty</h1>
      {data.map((project, i) => (
        <Project data={project} key={i} />
      ))}

      <div className="projectsArrows">
        <button className="projectArrow arrowLeft">
          <img src={ArrowLeft} alt="<" />
        </button>
        <button className="projectArrow arrowRight">
          <img src={ArrowRight} alt=">" />
        </button>
      </div>
    </div>
  );
}
