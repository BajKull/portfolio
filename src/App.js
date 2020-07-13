import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Main from "./main/Main";
import Projects from "./projects/Projects";
import About from "./about/About";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";
import Navbar from "./navbar/Navbar";
import Background from "./icons/bg.svg";

import "./sass/style.css";

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <Navbar path={location} />
      <div className="navbarBg">
        <img src={Background} alt="" />
      </div>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={1500} classNames="page">
              <Switch location={location}>
                <Route path="/" exact component={Main} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/about" exact component={About} />
                <Route path="/skills" exact component={Skills} />
                <Route path="/contact" exact component={Contact} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
}

export default App;
