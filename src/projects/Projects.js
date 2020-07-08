import React, { useState } from "react";
import Project from "./Project";
import data from "./data/ProjectData";

import ArrowLeft from "../icons/arrowLeft.svg";
import ArrowRight from "../icons/arrowRight.svg";

export default function Projects() {
  const [currentProject, setCurrectProject] = useState(data.length * 300);
  const [currentImage, setCurrentImage] = useState(0);
  const project = data[currentProject % data.length];
  const activeImage = project.images[currentImage];
  const resetDots = () => {
    const dots = Array.from(
      document.getElementsByClassName("projectImagesDots")[0].children
    );
    dots.forEach((dot) => dot.classList.remove("dotActive"));
    dots[0].classList.add("dotActive");
  };
  return (
    <div className="projects">
      <h1 className="projectsTitle">Moje projekty</h1>
      <Project
        data={project}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        activeImage={activeImage}
      />

      <div className="projectsArrows">
        <button
          className="projectArrow arrowLeft"
          onClick={() => {
            setCurrectProject(currentProject - 1);
            setCurrentImage(0);
            resetDots();
          }}
        >
          <img src={ArrowLeft} alt="<" />
        </button>
        <button
          className="projectArrow arrowRight"
          onClick={() => {
            setCurrectProject(currentProject + 1);
            setCurrentImage(0);
            resetDots();
          }}
        >
          <img src={ArrowRight} alt=">" />
        </button>
      </div>
    </div>
  );
}
