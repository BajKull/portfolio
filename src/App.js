import React from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Main from "./main/Main";
import Projects from "./projects/Projects";
import About from "./about/About";
import Navbar from "./navbar/Navbar";

import "./sass/style.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={1500} classNames="page">
              <Switch location={location}>
                <Route path="/" exact component={Main} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/about" exact component={About} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
}

export default App;
