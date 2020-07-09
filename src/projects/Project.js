import React from "react";
import CrossfadeImage from "react-crossfade-image";

export default function Project({
  data,
  setCurrentImage,
  activeImage,
  timeout,
  setImageTimeout,
}) {
  const switchImage = (e) => {
    clearTimeout(timeout);
    const dotsContainer = document.getElementsByClassName(
      "projectImagesDots"
    )[0];
    const childrenDots = Array.from(dotsContainer.children);
    childrenDots.forEach((dot) => dot.classList.remove("dotActive"));

    const index = childrenDots.indexOf(e.target);
    childrenDots[index].classList.add("dotActive");
    setCurrentImage(index);
    setImageTimeout();
  };

  return (
    <div className="project">
      <div className="projectImages">
        <CrossfadeImage
          duration={1000}
          className="projectImage"
          src={activeImage}
          alt=""
        />
        <div className="projectImagesDots">
          {data.images.map((img, i) => (
            <span
              className="projectImagesDot"
              key={i}
              onClick={(e) => switchImage(e)}
            />
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
