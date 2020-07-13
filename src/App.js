import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Firebase from "firebase";
import Main from "./main/Main";
import Projects from "./projects/Projects";
import About from "./about/About";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";
import Navbar from "./navbar/Navbar";
import Background from "./icons/bg.svg";

import "./sass/style.css";

function App() {
  useEffect(() => {
    Firebase.initializeApp({
      apiKey: process.env.REACT_APP_FB_API_KEY,
      authDomain: process.env.REACT_APP_FB_AUTH_DOM,
      databaseURL: process.env.REACT_APP_FB_DB_URL,
      projectId: process.env.REACT_APP_FB_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FB_MSG_ID,
    });
  }, []);

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
