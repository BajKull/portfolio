import React, { useState, useEffect } from "react";

export default function Project({ data }) {
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    // get first project, make it visible
    const activeProject = document.getElementsByClassName("project")[0];
    activeProject.classList.add("projectActive");
    // get first project => images container => first image => add active tag
    activeProject.firstChild.firstChild.classList.add("imageActive");
    // make first dot active
    activeProject.firstChild.lastChild.childNodes[0].classList.add("dotActive");
  });

  const switchImage = (e) => {
    const dotsContainer = document.getElementsByClassName("projectImagesDots")[
      activeProject
    ];
    const childrenDots = Array.from(dotsContainer.children);
    childrenDots.forEach((dot) => dot.classList.remove("dotActive"));

    const index = childrenDots.indexOf(e.target);
    childrenDots[index].classList.add("dotActive");

    const imagesContainer = document.getElementsByClassName("projectImages")[
      activeProject
    ];
    const childrenImages = Array.from(imagesContainer.children);
    childrenImages.forEach((img) => img.classList.remove("imageActive"));
    childrenImages[index].classList.add("imageActive");
  };

  return (
    <div className="project">
      <div className="projectImages">
        {data.images.map((img, i) => (
          <img className="projectImage" src={img} alt="" key={i} />
        ))}
        <div className="projectImagesDots">
          {data.images.map((img, i) => (
            <span className="projectImagesDot" key={i} onClick={switchImage} />
          ))}
        </div>
      </div>
      <div className="projectInfo">
        <h1 className="projectTitle">{data.title}</h1>
        <p className="projectDescription">{data.description}</p>
        <div className="projectHrefs">
          <button className="projectBtnHref projectHref1">Demo</button>
          <button className="projectBtnHref projectHref2">GitHub</button>
        </div>
      </div>
    </div>
  );
}
