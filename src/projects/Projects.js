import React, { useEffect, useState } from "react";
import Project from "./Project";
import data from "./data/ProjectData";
import NavButton from "../navbar/NavButton";
import { Helmet } from "react-helmet";

export default function Projects() {
  const [currentProject, setCurrectProject] = useState(data.length * 300);
  const [currentImage, setCurrentImage] = useState(0);
  const [timeout, makeTimeout] = useState(null);
  const project = data[currentProject % data.length];
  const activeImage = project.images[currentImage];

  const resetDots = () => {
    const dots = Array.from(
      document.getElementsByClassName("projectImagesDots")[0].children
    );
    dots.forEach((dot) => dot.classList.remove("dotActive"));
    dots[0].classList.add("dotActive");
  };

  const arrowClick = (side) => {
    setCurrectProject(currentProject + side);
    setCurrentImage(0);
    resetDots();
    clearTimeout(timeout);
    setImageTimeout();
  };

  const setImageTimeout = () => {
    makeTimeout(
      setTimeout(() => {
        const dots = Array.from(
          document.getElementsByClassName("projectImagesDots")[0].children
        );
        const activeDot = document.getElementsByClassName("dotActive")[0];
        const index = dots.indexOf(activeDot);
        dots[(index + 1) % dots.length].click();
      }, 4000)
    );
  };

  useEffect(() => {
    document
      .getElementsByClassName("projectImagesDot")[0]
      .classList.add("dotActive");
    setImageTimeout();
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  }, [timeout]);

  return (
    <div className="projects">
      <h1 className="projectsTitle">Moje projekty</h1>
      <Project
        data={project}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        activeImage={activeImage}
        timeout={timeout}
        setImageTimeout={setImageTimeout}
        arrowClick={arrowClick}
      />
      <div className="projectsButtonPlace">
        <NavButton link="/contact" txt="Kontakt" cname="skillsBtn" />
      </div>
      <Helmet>
        <title>Projekty - Dawid Banachowski</title>
        <meta
          name="description"
          content="Spyfall - Gra planszowa/karciana Spyfall przeniesiona na przeglądarkę. Zgarnij przyjaciół i zagraj z nimi, nakryj szpiega lub jeśli nim jesteś, odgadnij lokację graczy. Przewiduje opcję uruchomienia na jednym urządzeniu przez wielu graczy, bądź poprzez online lobby..."
        />
      </Helmet>
    </div>
  );
}
