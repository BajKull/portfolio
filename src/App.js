import React from "react";
import Main from "./main/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./projects/Projects";

import "./sass/style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
