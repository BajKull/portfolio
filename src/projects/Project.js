import React from "react";
import CrossfadeImage from "react-crossfade-image";
import ArrowLeft from "../icons/arrowLeft.svg";
import ArrowRight from "../icons/arrowRight.svg";

export default function Project({
  data,
  setCurrentImage,
  activeImage,
  timeout,
  setImageTimeout,
  arrowClick,
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
        <button
          className="projectArrow arrowLeft"
          onClick={() => arrowClick(-1)}
        >
          <img src={ArrowLeft} alt="<" />
        </button>
        <button
          className="projectArrow arrowRight"
          onClick={() => arrowClick(1)}
        >
          <img src={ArrowRight} alt=">" />
        </button>
        <p className="projectDescription">{data.description}</p>
        <div className="projectHrefs">
          <a href={data.live} target="_blank" rel="noopener noreferrer">
            <button className="projectBtnHref projectHref1">Demo</button>
          </a>
          <a href={data.github} target="_blank" rel="noopener noreferrer">
            <button className="projectBtnHref projectHref2">GitHub</button>
          </a>
        </div>
      </div>
    </div>
  );
}
